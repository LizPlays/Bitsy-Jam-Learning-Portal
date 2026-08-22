/* Bitsy Jam portal — the tile test tool.
   Draw one 8x8 tile in two colours, watch it repeat, swap the palette.

   Two colours, not three. A Bitsy room has three palette entries
   (background, tile, sprite) but any single tile is drawn in two:
   a pixel is filled or it is not. Colour is stored separately from the
   drawing, which is the point the palette row is here to make. */

(function () {
  var GRID = 8;
  var EDIT_SCALE = 26;   /* 8 x 26 = 208px */
  var REPEAT = 4;
  var REPEAT_SCALE = 6;  /* 8 x 4 x 6 = 192px */

  var PAIRS = [
    { name: 'Stone', bg: '#252320', ink: '#C98F5C' },
    { name: 'Moss',  bg: '#22261F', ink: '#8FA085' },
    { name: 'Frost', bg: '#1E2428', ink: '#9FB6C2' },
    { name: 'Paper', bg: '#EFEAE3', ink: '#3A332C' }
  ];

  var state = {
    pixels: new Array(GRID * GRID).fill(0),
    bg: PAIRS[0].bg,
    ink: PAIRS[0].ink,
    painting: false,
    paintTo: 1
  };

  var el = {};

  function rowsFromPattern(name) {
    var t = window.BitsySprites && window.BitsySprites.TILES[name];
    if (!t) return null;
    var out = new Array(GRID * GRID).fill(0);
    for (var y = 0; y < GRID; y++) {
      for (var x = 0; x < GRID; x++) out[y * GRID + x] = t[y][x] === '1' ? 1 : 0;
    }
    return out;
  }

  function paint(canvas, scale, repeat) {
    var px = GRID * scale * repeat;
    if (canvas.width !== px) { canvas.width = px; canvas.height = px; }
    canvas.style.width = px + 'px';
    canvas.style.height = px + 'px';
    var ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = state.bg;
    ctx.fillRect(0, 0, px, px);
    ctx.fillStyle = state.ink;
    for (var ry = 0; ry < repeat; ry++) {
      for (var rx = 0; rx < repeat; rx++) {
        for (var y = 0; y < GRID; y++) {
          for (var x = 0; x < GRID; x++) {
            if (state.pixels[y * GRID + x]) {
              ctx.fillRect((rx * GRID + x) * scale, (ry * GRID + y) * scale, scale, scale);
            }
          }
        }
      }
    }
    return ctx;
  }

  function render() {
    var ctx = paint(el.edit, EDIT_SCALE, 1);
    /* editing grid, drawn over the tile so squares stay countable */
    var px = GRID * EDIT_SCALE;
    ctx.fillStyle = 'rgba(128,128,128,0.35)';
    for (var i = 0; i <= GRID; i++) {
      var at = Math.min(i * EDIT_SCALE, px - 1);
      ctx.fillRect(at, 0, 1, px);
      ctx.fillRect(0, at, px, 1);
    }

    paint(el.repeat, REPEAT_SCALE, REPEAT);

    var filled = state.pixels.reduce(function (a, b) { return a + b; }, 0);
    el.count.textContent = filled + ' of 64 filled';
  }

  function cellFromEvent(e) {
    var r = el.edit.getBoundingClientRect();
    var pt = e.touches ? e.touches[0] : e;
    var x = Math.floor((pt.clientX - r.left) / (r.width / GRID));
    var y = Math.floor((pt.clientY - r.top) / (r.height / GRID));
    if (x < 0 || y < 0 || x >= GRID || y >= GRID) return -1;
    return y * GRID + x;
  }

  function applyAt(i) {
    if (i < 0 || state.pixels[i] === state.paintTo) return;
    state.pixels[i] = state.paintTo;
    render();
  }

  function setPair(pair, btn) {
    state.bg = pair.bg;
    state.ink = pair.ink;
    el.bgInput.value = pair.bg;
    el.inkInput.value = pair.ink;
    var btns = el.pairRow.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute('aria-pressed', String(btns[i] === btn));
    render();
  }

  function init() {
    var root = document.querySelector('[data-tile-tool]');
    if (!root) return;

    el.edit = root.querySelector('[data-tt-edit]');
    el.repeat = root.querySelector('[data-tt-repeat]');
    el.count = root.querySelector('[data-tt-count]');
    el.pairRow = root.querySelector('[data-tt-pairs]');
    el.bgInput = root.querySelector('[data-tt-bg]');
    el.inkInput = root.querySelector('[data-tt-ink]');

    /* palette presets */
    PAIRS.forEach(function (p, idx) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'swatch';
      b.setAttribute('aria-pressed', String(idx === 0));
      b.innerHTML = '<span class="swatch__chip" style="background:' + p.bg + ';border-color:' + p.ink + '"><span style="background:' + p.ink + '"></span></span>' + p.name;
      b.addEventListener('click', function () { setPair(p, b); });
      el.pairRow.appendChild(b);
    });

    el.bgInput.addEventListener('input', function () { state.bg = this.value; render(); });
    el.inkInput.addEventListener('input', function () { state.ink = this.value; render(); });

    /* drawing: press decides whether this stroke fills or clears */
    function down(e) {
      var i = cellFromEvent(e);
      if (i < 0) return;
      state.painting = true;
      state.paintTo = state.pixels[i] ? 0 : 1;
      applyAt(i);
      e.preventDefault();
    }
    function move(e) { if (state.painting) { applyAt(cellFromEvent(e)); e.preventDefault(); } }
    function up() { state.painting = false; }

    el.edit.addEventListener('mousedown', down);
    el.edit.addEventListener('mousemove', move);
    el.edit.addEventListener('touchstart', down, { passive: false });
    el.edit.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);

    /* keyboard: the grid is reachable without a pointer */
    var cursor = 0;
    el.edit.setAttribute('tabindex', '0');
    el.edit.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k === 'ArrowRight') cursor = (cursor + 1) % 64;
      else if (k === 'ArrowLeft') cursor = (cursor + 63) % 64;
      else if (k === 'ArrowDown') cursor = (cursor + 8) % 64;
      else if (k === 'ArrowUp') cursor = (cursor + 56) % 64;
      else if (k === ' ' || k === 'Enter') { state.pixels[cursor] = state.pixels[cursor] ? 0 : 1; render(); }
      else return;
      e.preventDefault();
      el.count.textContent = 'Row ' + (Math.floor(cursor / 8) + 1) + ', column ' + (cursor % 8 + 1) + ': ' +
        (state.pixels[cursor] ? 'filled' : 'empty') + ' · ' +
        state.pixels.reduce(function (a, b) { return a + b; }, 0) + ' of 64 filled';
    });

    /* reference tiles */
    var refs = root.querySelectorAll('[data-tt-load]');
    for (var r = 0; r < refs.length; r++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          var rows = rowsFromPattern(btn.getAttribute('data-tt-load'));
          if (rows) { state.pixels = rows; render(); }
          var sibs = root.querySelectorAll('[data-tt-load]');
          for (var s = 0; s < sibs.length; s++) sibs[s].setAttribute('aria-pressed', String(sibs[s] === btn));
        });
      })(refs[r]);
    }

    var clear = root.querySelector('[data-tt-clear]');
    if (clear) clear.addEventListener('click', function () { state.pixels = new Array(64).fill(0); render(); });

    var invert = root.querySelector('[data-tt-invert]');
    if (invert) invert.addEventListener('click', function () {
      state.pixels = state.pixels.map(function (v) { return v ? 0 : 1; });
      render();
    });

    var save = root.querySelector('[data-tt-save]');
    if (save) save.addEventListener('click', function () {
      var out = document.createElement('canvas');
      var tmp = state.pixels;
      state.pixels = tmp;
      var ctx = out.getContext('2d');
      var scale = 16;
      out.width = GRID * scale * REPEAT; out.height = out.width;
      ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = state.bg; ctx.fillRect(0, 0, out.width, out.height);
      ctx.fillStyle = state.ink;
      for (var ry = 0; ry < REPEAT; ry++) for (var rx = 0; rx < REPEAT; rx++)
        for (var y = 0; y < GRID; y++) for (var x = 0; x < GRID; x++)
          if (state.pixels[y * GRID + x]) ctx.fillRect((rx * GRID + x) * scale, (ry * GRID + y) * scale, scale, scale);
      var a = document.createElement('a');
      a.download = 'tile-repeat.png';
      a.href = out.toDataURL('image/png');
      a.click();
    });

    var start = rowsFromPattern('grass');
    if (start) state.pixels = start;
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
