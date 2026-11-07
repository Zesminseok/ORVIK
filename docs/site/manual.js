/* ORVIK manual: a picture's markers and its numbered list point at each other (hover or focus either), and the contents
   list follows the chapter being read. Without script the markers and lists still match by number. */
(function () {
  document.querySelectorAll('ol.legend[data-legend]').forEach(function (ol) {
    var fig = document.querySelector('figure[data-fig="' + ol.getAttribute('data-legend') + '"]');
    if (!fig) return;
    var items = ol.querySelectorAll(':scope > li[data-n]');
    var pair = function (n, on) {
      fig.querySelectorAll('.mk[data-n="' + n + '"]').forEach(function (m) { m.classList.toggle('is-on', on); });
      items.forEach(function (li) { if (li.getAttribute('data-n') === n) li.classList.toggle('is-on', on); });
    };
    items.forEach(function (li) {
      var n = li.getAttribute('data-n');
      li.addEventListener('mouseenter', function () { pair(n, true); });
      li.addEventListener('mouseleave', function () { pair(n, false); });
    });
    fig.querySelectorAll('.mk').forEach(function (m) {
      var n = m.getAttribute('data-n');
      m.addEventListener('mouseenter', function () { pair(n, true); });
      m.addEventListener('mouseleave', function () { pair(n, false); });
    });
  });

  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var heads = Array.prototype.slice.call(document.querySelectorAll('.manual h2[id], .manual h3[id]')).filter(function (h) { return byId[h.id]; });
  var mark = function (id) {
    links.forEach(function (a) { a.removeAttribute('aria-current'); });
    document.querySelectorAll('.toc li.is-open').forEach(function (li) { li.classList.remove('is-open'); });
    var a = byId[id]; if (!a) return;
    a.setAttribute('aria-current', 'location');
    var li = a.closest('.toc > details > ol > li') || a.closest('li');
    var top = a.parentNode.closest('ol') && a.parentNode.parentNode.closest('li');
    (top || li).classList.add('is-open'); if (top) { var ta = top.querySelector(':scope > a'); if (ta) ta.setAttribute('aria-current', 'true'); }
  };
  var current = null;
  var update = function () {
    var y = (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 80) + 8, best = heads[0];
    for (var i = 0; i < heads.length; i++) { if (heads[i].getBoundingClientRect().top <= y) best = heads[i]; else break; }
    if (best && best.id !== current) { current = best.id; mark(current); }
  };
  var ticking = false;
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; update(); }); } }, { passive: true });
  update();

  /* phones: the contents list closes after a jump */
  var box = document.querySelector('.toc-box'), narrow = window.matchMedia('(max-width: 52rem)');
  if (box) {
    if (narrow.matches) box.removeAttribute('open');
    box.addEventListener('click', function (e) { if (narrow.matches && e.target.closest('a')) box.removeAttribute('open'); });
  }
})();
