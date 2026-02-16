(function () {
  /* ── Menu toggle ── */
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var siteNav = document.querySelector('[data-site-nav]');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.addEventListener('click', function (event) {
      var target = event.target;
      if (target instanceof Element && target.closest('a')) {
        siteNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Scroll reveal (IntersectionObserver) ── */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ── Contact form (mailto) ── */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var firstName = (document.getElementById('first-name') || {}).value || '';
      var lastName = (document.getElementById('last-name') || {}).value || '';
      var phone = (document.getElementById('phone') || {}).value || '';
      var email = (document.getElementById('email') || {}).value || '';
      var subject = (document.getElementById('subject') || {}).value || 'Website Contact';
      var message = (document.getElementById('message') || {}).value || '';

      var lines = [
        'Name: ' + firstName + ' ' + lastName,
        'Phone Number: ' + phone,
        'Email: ' + email,
        '',
        'Message:',
        message
      ];

      var mailto =
        'mailto:info@SharpEntity.com?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(lines.join('\n'));

      window.location.href = mailto;
    });
  }
})();
