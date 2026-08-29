/* Bitsy Jam portal — the Play! carousel.
   One game at a time, arrows, dots and swipe. Classic script so the page still
   works opened straight off a memory stick with file://.

   Markup:
     <div class="carousel" data-carousel aria-roledescription="carousel" aria-label="...">
       <div class="carousel__viewport">
         <div class="carousel__track" data-carousel-track>
           <article role="group" aria-roledescription="slide">…</article>
         </div>
       </div>
       <div class="carousel__nav">
         <button data-carousel-prev>…</button>
         <div data-carousel-dots></div>
         <button data-carousel-next>…</button>
       </div>
       <p data-carousel-count aria-live="polite"></p>
     </div>

   Off-screen slides are made inert, so a keyboard tab never lands on a Play
   button the reader cannot see. Without JS every slide stays in the flow and
   the viewport scrolls sideways — three visible games beats a dead carousel. */

(function () {
  var SWIPE = 40; /* px before a drag counts as a swipe */

  /* Templates. Replaced on bitsy:lang, so a Danish reader gets Danish labels
     even though the dots are built here rather than sitting in the markup. */
  var TPL = {
    count: '{n} of {t}',
    dot: 'Game {n} of {t}'
  };

  function fill(tpl, n, t) {
    return tpl.replace('{n}', n).replace('{t}', t);
  }

  function strings() {
    var i18n = window.BitsyI18n;
    if (!i18n) return;
    var lang = document.documentElement.lang === 'da' ? 'da' : 'en';
    var dict = i18n.strings[lang] || i18n.strings.en;
    if (dict['play.count']) TPL.count = dict['play.count'];
    if (dict['play.dot']) TPL.dot = dict['play.dot'];
  }

  var HAS_INERT = 'inert' in HTMLElement.prototype;

  function setInert(el, on) {
    if (HAS_INERT) { el.inert = on; return; }
    /* Older browser: hide it from the reader and take it out of the tab order. */
    if (on) el.setAttribute('aria-hidden', 'true');
    else el.removeAttribute('aria-hidden');
    var focusable = el.querySelectorAll('a[href], button, input, select, textarea, [tabindex]');
    for (var i = 0; i < focusable.length; i++) {
      if (on) focusable[i].setAttribute('tabindex', '-1');
      else focusable[i].removeAttribute('tabindex');
    }
  }

  function build(root) {
    var track = root.querySelector('[data-carousel-track]');
    var dotsBox = root.querySelector('[data-carousel-dots]');
    var prev = root.querySelector('[data-carousel-prev]');
    var next = root.querySelector('[data-carousel-next]');
    var countEl = root.querySelector('[data-carousel-count]');
    if (!track) return;

    var slides = Array.prototype.slice.call(track.children);
    var total = slides.length;
    if (total < 2) return;

    var current = 0;
    var dots = [];

    strings();

    if (dotsBox) {
      for (var i = 0; i < total; i++) {
        (function (idx) {
          var d = document.createElement('button');
          d.type = 'button';
          d.className = 'carousel__dot';
          d.addEventListener('click', function () { go(idx); });
          dotsBox.appendChild(d);
          dots.push(d);
        })(i);
      }
    }

    function relabel() {
      strings();
      for (var i = 0; i < total; i++) {
        slides[i].setAttribute('aria-label', fill(TPL.count, i + 1, total));
        if (dots[i]) dots[i].setAttribute('aria-label', fill(TPL.dot, i + 1, total));
      }
      if (countEl) countEl.textContent = fill(TPL.count, current + 1, total);
    }

    function go(idx) {
      current = Math.max(0, Math.min(total - 1, idx));
      track.style.transform = 'translateX(-' + (current * 100) + '%)';

      for (var i = 0; i < total; i++) {
        setInert(slides[i], i !== current);
        if (dots[i]) {
          if (i === current) dots[i].setAttribute('aria-current', 'true');
          else dots[i].removeAttribute('aria-current');
        }
      }
      if (prev) prev.disabled = current === 0;
      if (next) next.disabled = current === total - 1;
      if (countEl) countEl.textContent = fill(TPL.count, current + 1, total);
    }

    function move(dir) { go(current + dir); }

    if (prev) prev.addEventListener('click', function () { move(-1); });
    if (next) next.addEventListener('click', function () { move(1); });

    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { move(-1); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { move(1); e.preventDefault(); }
    });

    /* Swipe. Horizontal only — a vertical drag is the page scrolling. */
    var viewport = track.parentElement;
    var startX = 0, startY = 0;
    viewport.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    viewport.addEventListener('touchend', function (e) {
      var dx = startX - e.changedTouches[0].clientX;
      var dy = startY - e.changedTouches[0].clientY;
      if (Math.abs(dx) > SWIPE && Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 1 : -1);
    }, { passive: true });

    /* A focus ring inside a hidden slide can still nudge the viewport across.
       Snap it back rather than leaving the track half a card off. */
    viewport.addEventListener('scroll', function () { viewport.scrollLeft = 0; });

    document.addEventListener('bitsy:lang', relabel);

    root.setAttribute('data-carousel-ready', 'true');
    relabel();
    go(0);
  }

  function init() {
    var roots = document.querySelectorAll('[data-carousel]');
    for (var i = 0; i < roots.length; i++) build(roots[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
