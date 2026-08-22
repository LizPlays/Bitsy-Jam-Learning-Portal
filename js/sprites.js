/* Bitsy Jam portal — 1-bit sprites, tiles and room diagrams, painted from bit rows.
   Every appearance is a working example of the 8x8 two-colour constraint,
   so the rows below ARE the asset. Do not redraw, vectorise, or "clean up".

   Markup:
     <canvas data-sprite="pix" data-scale="4" data-animate="true" role="img" aria-label="..."></canvas>
     <canvas data-tile="grass" data-scale="8" data-repeat="2" data-grid="true" role="img" aria-label="..."></canvas>
     <canvas data-tile="stoneA" data-tile-b="stoneB" data-repeat="4" ...></canvas>   alternates the two
     <canvas data-room="scaled" data-scale="20" role="img" aria-label="..."></canvas>

   Scale is integer only. Pix has a 16px floor: below that the belly closes up. */

(function () {
  var PIX = {
    stand:  ['00111100','01111110','01011010','11111111','11000011','11000011','01111110','01100110'],
    waddle: ['00111100','01111110','01011010','11111111','11000011','11000011','01111110','00110011'],
    points: ['00111100','01111110','01011011','11111111','11000011','11000011','01111110','01100110'],
    winces: ['00111100','01111110','01111110','11111111','11000011','11000011','01111110','00111100']
  };

  var TILES = {
    /* worksheet pair */
    grass:  ['00000000','00010000','00010000','00010000','01010000','01010010','01011010','11011011'],
    lines:  ['00000000','11111100','00000000','00111111','00000000','11111100','00000000','00111111'],
    /* texture comparison */
    flat:   ['11111111','11111111','11111111','11111111','11111111','11111111','11111111','11111111'],
    stoneA: ['00000000','01111110','01111110','01110110','00000000','11101111','11101111','11101111'],
    stoneB: ['00000000','11111011','11111011','11011011','00000000','01111110','01101110','01111110'],
    brick:  ['11111111','00010000','00010000','11111111','00000100','00000100','11111111','00010000'],
    dots:   ['10001000','00000000','00100010','00000000','10001000','00000000','00100010','00000000'],
    /* implied perspective */
    floor:  ['00100010','00000000','01000100','00000000','00100010','00000000','01000100','00000000'],
    wall:   ['11111111','10000001','11111111','00000000','11111111','10000001','11111111','00000000'],
    lookup: ['00011000','00011000','00111100','00111100','01100110','01100110','11000011','11000011']
  };

  /* Room diagrams. '#' is a drawn tile, '.' is empty floor.
     Same four elements in both rooms — only how many tiles each claims changes. */
  var ROOMS = {
    flat: {
      map: [
        '............',
        '...#........',
        '............',
        '........#...',
        '............',
        '.....#......',
        '............',
        '..#.........',
        '............',
        '............'
      ],
      labels: [
        { x: 3, y: 1, text: 'tree · 1' },
        { x: 8, y: 3, text: 'door · 1' },
        { x: 5, y: 5, text: 'player · 1' },
        { x: 2, y: 7, text: 'window · 1' }
      ]
    },
    scaled: {
      map: [
        '............',
        '.###........',
        '.###........',
        '..#.........',
        '........#...',
        '........#...',
        '.....#......',
        '......#.....',
        '............',
        '............'
      ],
      labels: [
        { x: 1, y: 1, text: 'tree · 7' },
        { x: 8, y: 4, text: 'door · 2' },
        { x: 5, y: 6, text: 'player · 1' },
        { x: 6, y: 7, text: 'window · 1' }
      ]
    }
  };

  function token(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name);
    return (v && v.trim()) || fallback;
  }

  function paintRows(canvas, rows, opts) {
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
        var use = (opts.rowsAlt && (rx + ry) % 2) ? opts.rowsAlt : rows;
        for (var y = 0; y < 8; y++) {
          for (var x = 0; x < 8; x++) {
            if (use[y][x] === '1') {
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
      var alt = TILES[el.getAttribute('data-tile-b')] || null;
      paintRows(el, rows, {
        scale: num(el, 'data-scale', 8),
        repeat: num(el, 'data-repeat', 2),
        rowsAlt: alt,
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
        var scale = Math.max(2, num(el, 'data-scale', 4)); /* 2 x 8 = 16px floor */
        var color = el.getAttribute('data-color') || token('--text-strong', '#EFEAE3');
        var draw = function (p) {
          paintRows(el, PIX[p] || PIX.stand, { scale: scale, repeat: 1, color: color, bg: null, grid: false });
        };
        draw(pose);
        if (flag(el, 'data-animate') && !reduce && pose === 'stand') {
          var alt = false;
          setInterval(function () { alt = !alt; draw(alt ? 'waddle' : 'stand'); }, 400);
        }
      })(nodes[i]);
    }
  }

  function drawRooms() {
    var nodes = document.querySelectorAll('canvas[data-room]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var room = ROOMS[el.getAttribute('data-room')];
      if (!room) continue;

      var t = Math.max(6, num(el, 'data-scale', 20));
      var cols = room.map[0].length, rowsN = room.map.length;
      el.width = cols * t; el.height = rowsN * t;
      el.style.width = (cols * t) + 'px';
      el.style.height = (rowsN * t) + 'px';

      var ctx = el.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = el.getAttribute('data-bg') || token('--bg-card', '#252320');
      ctx.fillRect(0, 0, el.width, el.height);

      /* tile grid, so "how many tiles" is countable */
      ctx.fillStyle = token('--tile-grid', 'rgba(239,234,227,0.14)');
      for (var g = 0; g <= cols; g++) ctx.fillRect(Math.min(g * t, el.width - 1), 0, 1, el.height);
      for (var h = 0; h <= rowsN; h++) ctx.fillRect(0, Math.min(h * t, el.height - 1), el.width, 1);

      ctx.fillStyle = el.getAttribute('data-color') || token('--accent', '#C98F5C');
      for (var y = 0; y < rowsN; y++) {
        for (var x = 0; x < cols; x++) {
          if (room.map[y][x] === '#') ctx.fillRect(x * t + 1, y * t + 1, t - 2, t - 2);
        }
      }

      /* labels go in a sibling layer so they stay real text */
      var layer = el.parentNode.querySelector('[data-room-labels]');
      if (layer) {
        layer.innerHTML = '';
        for (var k = 0; k < room.labels.length; k++) {
          var l = room.labels[k];
          var span = document.createElement('span');
          span.className = 'room__label';
          span.textContent = l.text;
          span.style.left = (l.x * t) + 'px';
          span.style.top = (l.y * t - 15) + 'px';
          layer.appendChild(span);
        }
      }
    }
  }

  function drawAll() { drawTiles(); drawSprites(); drawRooms(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', drawAll);
  } else {
    drawAll();
  }

  window.BitsySprites = { redraw: drawAll, paintRows: paintRows, PIX: PIX, TILES: TILES, ROOMS: ROOMS };
})();
