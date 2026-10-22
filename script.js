(() => {
  const root = document.documentElement;
  const body = document.body;
  const toggle = document.getElementById('langToggle');
  const translatable = document.querySelectorAll('[data-ar][data-en]');
  let language = 'ar';

  function setLanguage(next) {
    language = next;
    const isArabic = language === 'ar';
    root.lang = language;
    root.dir = isArabic ? 'rtl' : 'ltr';
    body.dir = root.dir;
    toggle.textContent = isArabic ? 'EN' : 'عربي';
    translatable.forEach(el => {
      const value = el.dataset[isArabic ? 'ar' : 'en'];
      if (value !== undefined) el.innerHTML = value;
    });
    document.querySelectorAll('[data-ar-placeholder][data-en-placeholder]').forEach(el => {
      el.placeholder = el.dataset[isArabic ? 'arPlaceholder' : 'enPlaceholder'];
    });
    document.title = isArabic
      ? 'YT Technology | مواقع ويب بتصميم يليق بمشروعك'
      : 'YT Technology | Websites that fit your business';
  }

  toggle.addEventListener('click', () => setLanguage(language === 'ar' ? 'en' : 'ar'));
  document.getElementById('year').textContent = new Date().getFullYear();

  // Small, accessible privacy dialog; no form data is stored by this static site.
  const privacyDialog = document.getElementById('privacy');
  const privacyLink = document.getElementById('privacyLink');
  const privacyClose = document.getElementById('privacyClose');
  privacyLink.addEventListener('click', event => { event.preventDefault(); if (typeof privacyDialog.showModal === 'function') privacyDialog.showModal(); });
  privacyClose.addEventListener('click', () => privacyDialog.close());
  privacyDialog.addEventListener('click', event => { if (event.target === privacyDialog) privacyDialog.close(); });

  // Keep form controls usable even when visual effects are enabled.
  document.querySelectorAll('.quote-form input, .quote-form select, .quote-form textarea').forEach(control => {
    control.addEventListener('pointerdown', () => { control.focus({ preventScroll: true }); });
  });

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  document.getElementById('quoteForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const ar = language === 'ar';
    const labels = ar
      ? ['طلب جديد من موقع YT Technology', 'الاسم / المشروع', 'نوع الموقع', 'الميزانية', 'التفاصيل']
      : ['New inquiry from YT Technology website', 'Name / business', 'Website type', 'Budget', 'Details'];
    const lines = [
      labels[0],
      `${labels[1]}: ${form.get('name')}`,
      `${labels[2]}: ${form.get('type')}`,
      `${labels[3]}: ${form.get('budget') || (ar ? 'لم تُحدد' : 'Not specified')}`,
      `${labels[4]}: ${form.get('details')}`
    ];
    const waUrl = 'https://wa.me/201034968272?text=' + encodeURIComponent(lines.join('\n'));
    const opened = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!opened) window.location.href = waUrl;
  });
})();