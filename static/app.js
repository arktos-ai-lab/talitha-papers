// Paper page: reading view / side-by-side toggle (#sbs in the URL) and the side-by-side language picker.
// Home page: search box and licence filter. No tracking, no storage beyond the URL hash.
(function () {
  var tabs = document.querySelectorAll('.seg [role="tab"]');
  if (tabs.length) {
    var show = function (id, push) {
      var found = false;
      tabs.forEach(function (t) {
        var on = t.dataset.pane === id;
        found = found || on;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      if (!found) return;
      document.querySelectorAll('.pane').forEach(function (p) { p.hidden = p.dataset.id !== id; });
      if (push) history.replaceState(null, '', '#' + id);
    };
    tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.pane, true); }); });
    if (location.hash) show(location.hash.slice(1), false);
    var pick = document.querySelector('.sbs-pick select');
    if (pick) pick.addEventListener('change', function () {
      document.querySelectorAll('.sbs-lang').forEach(function (d) { d.hidden = d.dataset.lang !== pick.value; });
    });
  }

  document.querySelectorAll('button.copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = document.getElementById(b.dataset.copy).textContent;
      var done = function () { var o = b.textContent; b.textContent = b.dataset.copied || 'Copied'; setTimeout(function () { b.textContent = o; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, function () {});
    });
  });

  var q = document.getElementById('q');
  if (q) {
    var chips = document.querySelectorAll('.chips button');
    var items = document.querySelectorAll('.list li');
    var groups = document.querySelectorAll('.group');
    var empty = document.querySelector('.empty');
    var apply = function () {
      var words = q.value.toLowerCase().split(/\s+/).filter(Boolean);
      var lics = [];
      chips.forEach(function (c) { if (c.getAttribute('aria-pressed') === 'true') lics.push(c.dataset.lic); });
      var shown = 0;
      items.forEach(function (li) {
        var ok = words.every(function (w) { return li.dataset.q.indexOf(w) >= 0; }) &&
                 (!lics.length || lics.indexOf(li.dataset.lic) >= 0);
        li.hidden = !ok;
        if (ok) shown++;
      });
      groups.forEach(function (g) { g.hidden = !g.querySelector('li:not([hidden])'); });
      empty.hidden = shown > 0;
      var n = document.getElementById('shown');
      if (n) n.textContent = shown;
    };
    q.addEventListener('input', apply);
    document.querySelectorAll('.topic-chips button').forEach(function (b) {
      b.addEventListener('click', function () {
        q.value = b.dataset.q;
        apply();
        document.getElementById('browse').scrollIntoView({ behavior: 'smooth' });
      });
    });
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
        apply();
      });
    });
  }
})();
