/* ORVIK site: the screens run. Over each 2x screenshot a layer on the app's own pixel grid carries the parts that move:
   the detail waveforms (strips the app rendered, scrolled at deck speed), timecode and clocks, the SMPTE OUT readouts and
   the CUE CALL board's countdowns, all on one clock that loops every 24 s. This is a picture of the app, not the app:
   no ORVIK code runs here. Without script the screenshots stay as they are. */
(function () {
  var screens = Array.prototype.slice.call(document.querySelectorAll('[data-live]'));
  if (!screens.length || !window.requestAnimationFrame) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dir = (document.documentElement.lang === 'ko' ? '../' : '') + 'site/live/';
  var LOOP = 24000;
  var p2 = function (n) { return (n < 10 ? '0' : '') + n; };
  /* HH:MM:SS:FF at 25 fps, with an hour offset (SMPTE layers) */
  var tc = function (ms, hours) { ms = Math.max(0, ms) + (hours || 0) * 3600000; var s = Math.floor(ms / 1000); return p2(Math.floor(s / 3600)) + ':' + p2(Math.floor(s / 60) % 60) + ':' + p2(s % 60) + ':' + p2(Math.floor(ms / 40) % 25); };
  var hms = function (ms) { var s = Math.floor(ms / 1000); return Math.floor(s / 3600) + ':' + p2(Math.floor(s / 60) % 60) + ':' + p2(s % 60) + '.' + (Math.floor(ms / 100) % 10); };
  var mss = function (ms) { var s = Math.floor(ms / 1000); return Math.floor(s / 60) + ':' + p2(s % 60); };
  /* the cue call's own countdown format: under 10 s tenths rounded up, else m:ss rounded up */
  var left = function (ms) { if (ms < 10000) return (Math.ceil(Math.max(0, ms) / 100 - 1e-9) / 10).toFixed(1); var s = Math.ceil(ms / 1000 - 1e-9); return Math.floor(s / 60) + ':' + p2(s % 60); };
  var DECK = [
    { n: 1, x: 132, y: 196, at: 84000, dur: 195020, start: 71000, wave: 'deck1' },
    { n: 2, x: 1500, y: 196, at: 60800, dur: 135113, start: 48000, wave: 'deck2' }
  ];
  var el = function (tag, cls, css, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (css) e.style.cssText = css; if (html != null) e.innerHTML = html; return e; };

  function deckParts(layer) {
    var parts = [];
    DECK.forEach(function (d) {
      var wf = el('div', 'lv-wf', 'left:' + (d.x + 28) + 'px;top:' + (d.y + 102) + 'px');
      var past = el('div', 'lv-win', 'left:0;width:325px'), fut = el('div', 'lv-win', 'left:325px;width:975px');
      var sp = el('div', 'lv-strip', 'background-image:url(' + dir + d.wave + '-wave-played.png)'), sf = el('div', 'lv-strip', 'background-image:url(' + dir + d.wave + '-wave.png)');
      past.appendChild(sp); fut.appendChild(sf); wf.appendChild(past); wf.appendChild(fut); wf.appendChild(el('div', 'lv-head'));
      layer.appendChild(wf);
      layer.appendChild(el('div', 'lv-erase', 'left:' + (d.x + 18) + 'px;top:' + (d.y + 452) + 'px;width:368px;height:58px'));
      layer.appendChild(el('div', 'lv-erase', 'left:' + (d.x + 18) + 'px;top:' + (d.y + 524) + 'px;width:362px;height:36px'));
      var t = el('div', 'lv-tc', 'left:' + (d.x + 20.25) + 'px;top:' + (d.y + 443.4) + 'px'), c = el('div', 'lv-sub', 'left:' + (d.x + 23.4) + 'px;top:' + (d.y + 521) + 'px');
      layer.appendChild(t); layer.appendChild(c);
      parts.push({ d: d, sp: sp, sf: sf, t: t, c: c });
    });
    [[3, 132, 786], [4, 1500, 786]].forEach(function (k) { var i = el('img', 'lv-card', 'left:' + k[1] + 'px;top:' + k[2] + 'px'); i.alt = ''; i.src = dir + 'card' + k[0] + '.webp'; layer.appendChild(i); });
    return function (t) {
      parts.forEach(function (p) {
        var pos = p.d.at + t, x = (pos - p.d.start) / 5;
        p.sf.style.transform = 'translateX(' + (-x).toFixed(1) + 'px)'; p.sp.style.transform = 'translateX(' + (325 - x).toFixed(1) + 'px)';
        p.t.textContent = tc(pos); p.c.textContent = hms(pos) + ' / ' + hms(p.d.dur);
      });
    };
  }
  /* SMPTE OUT's MASTER readout in the DECKS page's bottom bar */
  function barParts(layer) {
    layer.appendChild(el('div', 'lv-barfix'));
    var segs = [2285, 2372, 2461, 2550].map(function (x, i) { var s = el('div', 'lv-bseg', 'left:' + x + 'px', '<span class="g">88</span>'); var l = el('span', 'l' + (i ? '' : ' h')); s.appendChild(l); layer.appendChild(s); return l; });
    [[2358, 1495], [2358, 1509], [2446, 1495], [2446, 1509], [2535, 1517]].forEach(function (q) { layer.appendChild(el('div', 'lv-bsep', 'left:' + q[0] + 'px;top:' + q[1] + 'px')); });
    return function (t) { var m = tc(84000 + t, 1).split(':'); for (var i = 0; i < 4; i++) segs[i].textContent = m[i]; };
  }
  /* the SMPTE OUT drawer, rebuilt on the app's 2x grid over the captured one */
  function drawerParts(layer) {
    var clip = el('div', 'lv-dclip'), drawer = el('div', 'lv-drawer', null, '<div class="lv-drt">SMPTE OUT</div>');
    clip.appendChild(drawer); layer.appendChild(clip);
    var P = [
      { x: 4, w: 922, c: '#5accda', name: 'LAYER A', on: [1, 0, 0], src: ['1', '2', '3', '4'], sel: 0, offs: ['01', '00', '00', '00'], set: true, at: 84000, h: 1 },
      { x: 938, w: 900, c: '#fd80b3', name: 'LAYER B', on: [1, 0, 0], src: ['1', '2', '3', '4'], sel: 1, offs: ['02', '00', '00', '00'], set: true, at: 60800, h: 2 },
      { x: 1850, w: 900, c: '#ff9601', name: 'MASTER', on: [0, 0, 1], src: ['A', 'B', 'CLOCK', 'FREEWHEEL'], sel: 0, offs: ['00', '00', '00', '00'], set: false, at: 84000, h: 1, master: true }
    ];
    var SEG = 94, ADV = 0.816 * SEG, PAIR = [104, 334, 564, 796], rows = [];
    P.forEach(function (p) {
      var h = '<div class="lv-pn-name">' + p.name + '</div>', R = p.w - 16, cx = [R - 210, R - 138, R - 66];
      ['LTC', 'MTC', 'ART'].forEach(function (n, i) { h += '<div class="lv-ch' + (p.on[i] ? ' on' : '') + '" style="left:' + cx[i] + 'px;top:12px;width:66px">' + n + '</div>'; });
      if (p.master) for (var k = 0; k < 4; k++) h += '<div class="lv-ch dim" style="left:' + (126 + k * 52) + 'px;top:12px;width:46px"></div>';
      h += '<div class="lv-rule" style="top:54px"></div>';
      var sx = 16; p.src.forEach(function (s, i) { var w = s.length > 2 ? s.length * 12 + 36 : 44; h += '<div class="lv-ch' + (i === p.sel ? (p.master ? ' on' : ' sel') : '') + '" style="left:' + sx + 'px;top:70px;width:' + w + 'px;height:44px;line-height:40px;font-size:20px">' + s + '</div>'; sx += w + 6; });
      h += '<div class="lv-rule" style="top:124px"></div>';
      ['HOURS', 'MINUTES', 'SECONDS', 'FRAMES'].forEach(function (l, i) {
        var c = PAIR[i], x = c - ADV + (0.816 - 0.717) * SEG / 2;
        h += '<div class="lv-lab" style="left:' + c + 'px">' + l + '</div><div class="lv-seg' + (i ? '' : ' hour') + '" style="left:' + x + 'px"><span class="g">88</span><span class="l"></span></div>';
        h += '<div class="lv-pm" style="left:' + (c - 50) + 'px">-</div><div class="lv-pmv' + (p.offs[i] !== '00' ? ' hot' : '') + '" style="left:' + (c - 20) + 'px">' + p.offs[i] + '</div><div class="lv-pm" style="left:' + (c + 18) + 'px">+</div>';
      });
      [[219, ':'], [449, ':'], [679, '.']].forEach(function (q) { h += q[1] === ':' ? '<div class="lv-sep" style="left:' + (q[0] - 7) + 'px;top:184px"></div><div class="lv-sep" style="left:' + (q[0] - 7) + 'px;top:216px"></div>' : '<div class="lv-sep" style="left:' + (q[0] - 7) + 'px;top:234px"></div>'; });
      h += '<div class="lv-rule" style="top:300px"></div><div class="lv-olab">OFFSET</div>';
      var ox = 128; if (p.set) { h += '<div class="lv-ch set" style="left:' + ox + 'px;top:316px;width:60px">SET</div>'; ox += 70; }
      h += '<div class="lv-ch go" style="left:' + ox + 'px;top:316px;width:60px">ON</div>';
      var pn = el('div', 'lv-pn', 'left:' + p.x + 'px;width:' + p.w + 'px;--c:' + p.c, h); drawer.appendChild(pn);
      rows.push({ p: p, live: pn.querySelectorAll('.lv-seg .l') });
    });
    return function (t) { rows.forEach(function (r) { var m = tc(r.p.at + t, r.p.h).split(':'); for (var i = 0; i < 4; i++) r.live[i].textContent = m[i]; }); };
  }
  /* CUE CALL board: the four groups as captured at 1:24.0, each cue on deck 1's grid */
  function boardParts(layer) {
    layer.appendChild(el('div', 'lv-er', 'left:26px;top:24px;width:432px;height:70px'));
    var head = el('div', 'lv-btc'); layer.appendChild(head);
    var beats = [483, 535, 587, 639].map(function (x) { var b = el('div', 'lv-bt', 'left:' + x + 'px'); layer.appendChild(b); return b; });
    layer.appendChild(el('div', 'lv-er', 'left:1226px;top:148px;width:190px;height:40px'));
    var time = el('div', 'lv-btime'); layer.appendChild(time);
    var G = [
      { name: 'Lighting', g: '#f5a623', x: 8, y: 216, cues: [['Chase', 98000], ['Strobe', 113000], ['Wash', 128000]] },
      { name: 'Video', g: '#4fd0e0', x: 1444, y: 216, cues: [['Loop B', 89600], ['Tunnel', 120000], ['Logo', 150000]] },
      { name: 'SFX', g: '#ff4d4d', x: 8, y: 820, far: true, cues: [['CO2', 143000]] },
      { name: 'Laser', g: '#3ddc84', x: 1444, y: 820, cues: [['Beam', 113000], ['Fan', 143000]] }
    ];
    var speaker = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" fill="currentColor"/></svg>';
    G.forEach(function (g) {
      var t = el('div', 'lv-t', 'left:' + g.x + 'px;top:' + g.y + 'px;--g:' + g.g);
      t.innerHTML = '<div class="lv-t-g">' + g.name + '<i>' + speaker + '</i></div><div class="lv-t-a">A</div><div class="lv-t-n"></div><div class="lv-t-cd' + (g.far ? ' far' : '') + '"></div><div class="lv-t-bar">' + new Array(13).join('<span></span>') + '</div><div class="lv-t-nx"></div><div class="lv-t-fl"></div>';
      layer.appendChild(t); g.el = t; g.n = t.querySelector('.lv-t-n'); g.cd = t.querySelector('.lv-t-cd'); g.bar = t.querySelector('.lv-t-bar').children; g.nx = t.querySelector('.lv-t-nx'); g.fl = t.querySelector('.lv-t-fl');
    });
    var bix = function (ms) { return Math.ceil((ms - 15) / 468.75 - 1e-9); };
    return function (tm) {
      var pos = 84000 + tm, m = tc(pos, 1).split(':');
      head.innerHTML = m.join('<b>:</b>');
      var bi = Math.floor((pos - 15) / 468.75); beats.forEach(function (b, i) { b.className = 'lv-bt' + ((((bi % 4) + 4) % 4) === i ? ' on' : ''); });
      time.textContent = mss(pos) + ' / ' + mss(195020);
      G.forEach(function (g) {
        var i = 0; while (i < g.cues.length && pos >= g.cues[i][1] + 700) i++;
        if (i >= g.cues.length) return;
        var cue = g.cues[i], l = cue[1] - pos, go = l <= 0, bl = bix(cue[1]) - bix(pos), call = !go && bl >= 1 && bl <= 5 ? String(bl) : '';
        g.el.className = 'lv-t' + (go || l < 10000 ? ' hot' : '');
        g.n.textContent = cue[0];
        g.cd.innerHTML = go ? 'GO' : call || (left(l) + (l < 10000 ? '<small>s</small>' : ''));
        var f = go ? 0 : Math.min(1, l / (l < 10000 ? 10000 : 60000)), lit = Math.round(f * 12);
        for (var k = 0; k < 12; k++) g.bar[k].className = k < lit ? 'on' : '';
        g.nx.innerHTML = g.cues.slice(i + 1, i + 3).map(function (c, k) { return '<span' + (k ? ' class="ghost"' : '') + '>Next</span><b>' + c[0] + '</b><em>' + left(c[1] - pos) + '</em>'; }).join('<br>');
        var d = (pos - cue[1]) / 1000; g.fl.style.opacity = d >= 0 && d < 0.43 ? (d < 0.03 ? 0.55 : 0.55 * (1 - (d - 0.03) / 0.4)).toFixed(3) : 0;
      });
    };
  }

  var live = [];
  screens.forEach(function (screen) {
    var kind = screen.getAttribute('data-live'), host = screen.querySelector('.live-host') || screen, stage = host.querySelector('.live-zoom') || host;
    var layer = el('div', 'lv-layer'); layer.setAttribute('aria-hidden', 'true');
    var update = [];
    if (kind === 'decks' || kind === 'smpte') update.push(deckParts(layer));
    if (kind === 'decks') update.push(barParts(layer));
    if (kind === 'smpte') update.push(drawerParts(layer));
    if (kind === 'board') update.push(boardParts(layer));
    stage.appendChild(layer);
    var fit = function () { var w = host.clientWidth; if (w) layer.style.transform = 'scale(' + (w / 2880) + ')'; };
    fit(); if (window.ResizeObserver) new ResizeObserver(fit).observe(host); else window.addEventListener('resize', fit);
    var item = { screen: screen, visible: true, draw: function (t) { update.forEach(function (u) { u(t); }); } };
    item.draw(0); live.push(item);
  });
  screens.forEach(function (s) { s.classList.add('is-live'); });
  if (reduce) return;
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (e) { live.forEach(function (l) { if (l.screen === e.target) l.visible = e.isIntersecting; }); }); }, { rootMargin: '120px' });
    live.forEach(function (l) { l.visible = false; io.observe(l.screen); });
  }
  var t0 = performance.now();
  var tick = function (now) {
    var t = (now - t0) % LOOP;
    live.forEach(function (l) { if (l.visible) l.draw(t); });
    window.requestAnimationFrame(tick);
  };
  window.requestAnimationFrame(tick);
})();
