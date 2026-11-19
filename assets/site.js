/* Bloomhaven Care — small, dependency-free progressive enhancement. The site works without this file. */
(function () {
  'use strict';
  var ROOT = document.documentElement.getAttribute('data-root') || '/';

  /* Mobile menu */
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('main-nav');
  if (btn && nav) {
    var close = function () { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { close(); btn.focus(); } });
  }

  /* Text size control (remembered in this browser only; the site works without it) */
  var groups = document.querySelectorAll('.tsz');
  if (groups.length) {
    var apply = function (n) {
      var c = document.documentElement.classList;
      c.remove('fs-1', 'fs-2');
      if (n > 0) c.add('fs-' + n);
      document.querySelectorAll('.tsz button').forEach(function (b) { b.setAttribute('aria-pressed', String(parseInt(b.getAttribute('data-fs'), 10) === n)); });
    };
    var saved = 0;
    try { saved = parseInt(localStorage.getItem('bh-fs') || '0', 10) || 0; } catch (e) { /* storage unavailable */ }
    groups.forEach(function (g) { g.hidden = false; });
    apply(saved);
    document.querySelectorAll('.tsz button').forEach(function (b) {
      b.addEventListener('click', function () {
        var n = parseInt(b.getAttribute('data-fs'), 10);
        apply(n);
        try { localStorage.setItem('bh-fs', String(n)); } catch (e) { /* ignore */ }
      });
    });
  }

  /* Postcode checker */
  document.querySelectorAll('form[data-coverage]').forEach(function (form) {
    var cov = {};
    try { cov = JSON.parse(form.getAttribute('data-coverage')); } catch (e) { /* ignore */ }
    var out = form.querySelector('.result');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var raw = (form.querySelector('input').value || '').toUpperCase().replace(/\s+/g, '');
      var m = raw.match(/^([A-Z]{1,2}[0-9][A-Z0-9]?)([0-9][A-Z]{2})?$/);
      out.className = 'result';
      if (!m) { out.textContent = 'Please enter a UK postcode, for example PR1 1AA.'; out.classList.add('maybe'); return; }
      var district = m[1], town = null;
      Object.keys(cov).forEach(function (t) { if (cov[t].indexOf(district) > -1) town = t; });
      if (town) {
        out.innerHTML = '<strong>Good news: ' + district + ' is in our ' + town + ' area.</strong> Call us on the number above or <a href="' + ROOT + 'contact/">send an enquiry</a> and we will talk through what you need.';
        out.classList.add('ok');
      } else {
        out.innerHTML = '<strong>' + district + ' is outside the areas we list.</strong> We may still be able to help or point you to someone who can. Please <a href="' + ROOT + 'contact/">get in touch</a>.';
        out.classList.add('maybe');
      }
    });
  });

  /* Enquiry forms: validate accessibly, then send in the background. Falls back to normal POST without JS. */
  document.querySelectorAll('form[data-enquiry]').forEach(function (form) {
    var msg = form.querySelector('.formmsg');
    form.setAttribute('novalidate', '');
    form.addEventListener('submit', function (e) {
      var missing = [];
      form.querySelectorAll('[required]').forEach(function (el) {
        var bad = el.type === 'checkbox' ? !el.checked : !el.value.trim();
        if (el.type === 'email' && el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) bad = true;
        el.setAttribute('aria-invalid', bad ? 'true' : 'false');
        if (bad) missing.push(el);
      });
      if (missing.length) {
        e.preventDefault();
        var names = missing.map(function (el) { var l = form.querySelector('label[for="' + el.id + '"]'); return l ? l.textContent.replace('*', '').trim() : el.name; });
        msg.className = 'formmsg err';
        msg.setAttribute('role', 'alert');
        msg.textContent = 'Please check: ' + names.join(', ') + '.';
        missing[0].focus();
        return;
      }
      if (!window.fetch || !window.FormData) return; // native POST
      e.preventDefault();
      var submit = form.querySelector('[type=submit]');
      var label = submit.textContent;
      submit.disabled = true; submit.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error('bad'); return r; })
        .then(function () {
          msg.className = 'formmsg okmsg'; msg.setAttribute('role', 'status');
          msg.innerHTML = '<strong>Thank you, we have your message.</strong> A member of the team will reply within one working day.';
          form.querySelectorAll('.f, .check, button').forEach(function (n) { n.hidden = true; });
          msg.focus && msg.setAttribute('tabindex', '-1'); msg.focus();
        })
        .catch(function () {
          submit.disabled = false; submit.textContent = label;
          msg.className = 'formmsg err'; msg.setAttribute('role', 'alert');
          msg.innerHTML = 'Sorry, that did not send. Please call us on <a href="tel:' + (form.getAttribute('data-tel') || '') + '">' + (form.getAttribute('data-phone') || '') + '</a> or email us directly.';
        });
    });
  });
})();
