/* Bitsy Jam portal — marks the sidebar link for whichever section you are reading.
   Links are plain anchors, so every topic stays bookmarkable with or without this file.

   Position, not intersection ratio: the targets range from a tall <section> to a
   one-line <h3>, and ratios are not comparable across those. We mark the last
   target whose top has passed a fixed reading line. */

(function () {
  var LINE = 0.25; /* reading line, fraction of viewport height */

  function init() {
    var nav = document.querySelector('.sidenav');
    if (!nav) return;

    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    var items = [];
    links.forEach(function (a) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (el) items.push({ link: a, el: el });
    });
    if (!items.length) return;

    var marked = null;

    function mark(link) {
      if (marked === link) return;
      links.forEach(function (a) { a.removeAttribute('aria-current'); });
      if (link) link.setAttribute('aria-current', 'true');
      marked = link;
    }

    function update() {
      var line = window.innerHeight * LINE;
      var found = null;
      /* document order: the last one above the line wins */
      for (var i = 0; i < items.length; i++) {
        if (items[i].el.getBoundingClientRect().top <= line) found = items[i].link;
      }
      mark(found);
    }

    var queued = false;
    function onScroll() {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; update(); });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
