/* Bitsy Jam portal — 1-bit sprites and tiles, painted from bit rows.
   Every appearance is a working example of the 8x8 two-colour constraint,
   so the rows below ARE the asset. Do not redraw, vectorise, or "clean up".

   Markup:
     <canvas data-sprite="pix" data-scale="4" data-animate="true"
             role="img" aria-label="Pix waits beside the empty list"></canvas>
     <canvas data-tile="grass" data-scale="8" data-repeat="2" data-grid="true"
             role="img" aria-label="..."></canvas>
   Scale is integer only. Pix has a 16px floor: below that the belly closes up. */

(function () {
  var PIX = {
    stand:  ['00111100','01111110','01011010','11111111','11000011','11000011','01111110','01100110'],
    waddle: ['00111100','01111110','01011010','11111111','11000011','11000011','01111110','00110011'],
    points: ['00111100','01111110','01011011','11111111','11000011','11000011','01111110','01100110'],
    winces: ['00111100','01111110','01111110','11111111','11000011','11000011','01111110','00111100']
  };

  var TILES = {
    grass: ['00000000','00010000','00010000','00010000','01010000','01010010','01011010','11011011'],
    lines: ['00000000','11111100','00000000','00111111','00000000','11111100','00000000','00111111'],
    brick: ['11111111','00010000','00010000','11111111','00000100','00000100','11111111','00010000'],
    dots:  ['10001000','00000000','00100010','00000000','10001000','00000000','00100010','00000000']
  };

  function token(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name);
    return (v && v.trim()) || fallback;
  }

  function paint(canvas, rows, opts) {
    var scale = Math.max(2, Math.round(opts.scale));
    var repeat = Math.max(1, Math.round(opts.repeat));
    var px = 8 * scale * repeat;
    if (canvas.width !== px) { canvas.width = px; canvas.height = px; }
    canvas.style.width = px + 'px';
    canvas.style.height = px + 'px';

    var ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, px, px);

    if (opts.bg) { ctx.fillStyle = opts.bg; ctx.fillRect(0, 0, px, px); }

    ctx.fillStyle = opts.color;
    for (var ry = 0; ry < repeat; ry++) {
      for (var rx = 0; rx < repeat; rx++) {
        for (var y = 0; y < 8; y++) {
          for (var x = 0; x < 8; x++) {
            if (rows[y][x] === '1') {
              ctx.fillRect((rx * 8 + x) * scale, (ry * 8 + y) * scale, scale, scale);
            }
          }
        }
      }
    }

    if (opts.grid && scale >= 4) {
      var cell = token('--tile-grid', 'rgba(239,234,227,0.14)');
      var edge = token('--tile-grid-edge', 'rgba(239,234,227,0.38)');
      for (var i = 0; i <= 8 * repeat; i++) {
        var at = Math.min(i * scale, px - 1);
        ctx.fillStyle = (i % 8 === 0) ? edge : cell;
        ctx.fillRect(at, 0, 1, px);
        ctx.fillRect(0, at, px, 1);
      }
    }
  }

  function num(el, attr, fallback) {
    var v = parseInt(el.getAttribute(attr), 10);
    return isNaN(v) ? fallback : v;
  }

  function flag(el, attr) {
    var v = el.getAttribute(attr);
    return v !== null && v !== 'false';
  }

  function drawTiles() {
    var nodes = document.querySelectorAll('canvas[data-tile]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var rows = TILES[el.getAttribute('data-tile')] || TILES.grass;
      paint(el, rows, {
        scale: num(el, 'data-scale', 8),
        repeat: num(el, 'data-repeat', 2),
        color: el.getAttribute('data-color') || token('--accent', '#C98F5C'),
        bg: el.getAttribute('data-bg') || token('--bg-card', '#252320'),
        grid: flag(el, 'data-grid')
      });
    }
  }

  function drawSprites() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var nodes = document.querySelectorAll('canvas[data-sprite]');
    for (var i = 0; i < nodes.length; i++) {
      (function (el) {
        var pose = el.getAttribute('data-sprite');
        if (pose === 'pix') pose = 'stand';
        var requested = num(el, 'data-scale', 4);
        var scale = Math.max(2, requested); /* 2 x 8 = 16px floor */
        var color = el.getAttribute('data-color') || token('--text-strong', '#EFEAE3');
        var draw = function (p) { paint(el, PIX[p] || PIX.stand, { scale: scale, repeat: 1, color: color, bg: null, grid: false }); };
        draw(pose);
        if (flag(el, 'data-animate') && !reduce && (pose === 'stand')) {
          var alt = false;
          setInterval(function () { alt = !alt; draw(alt ? 'waddle' : 'stand'); }, 400);
        }
      })(nodes[i]);
    }
  }

  function drawAll() { drawTiles(); drawSprites(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', drawAll);
  } else {
    drawAll();
  }

  window.BitsySprites = { redraw: drawAll, PIX: PIX, TILES: TILES };
})();
