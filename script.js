const header = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#site-navigation');
const mobileViewport = window.matchMedia('(max-width: 800px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Navigation works as ordinary links without JavaScript. Enhance it on mobile.
if (header && menu && navigation) {
  const pageContent = document.querySelectorAll('main, footer');

  const setMenuOpen = (open, restoreFocus = false) => {
    const isOpen = open && mobileViewport.matches;

    header.classList.toggle('menu-open', isOpen);
    document.body.classList.toggle('navigation-open', isOpen);
    menu.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    pageContent.forEach(element => { element.inert = isOpen; });

    if (isOpen) navigation.querySelector('a')?.focus();
    if (restoreFocus) menu.focus();
  };

  header.classList.add('navigation-ready');

  menu.addEventListener('click', () => {
    setMenuOpen(menu.getAttribute('aria-expanded') !== 'true');
  });

  // Preserve native fragment navigation, URL history, and external-link behavior.
  header.addEventListener('click', event => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (menu.getAttribute('aria-expanded') !== 'true') return;

    if (event.key === 'Escape') {
      event.preventDefault();
      setMenuOpen(false, true);
    }

    if (event.key === 'Tab') {
      const controls = [...header.querySelectorAll('a, button')]
        .filter(element => element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  document.addEventListener('pointerdown', event => {
    if (!header.contains(event.target) && header.classList.contains('menu-open')) {
      setMenuOpen(false, true);
    }
  });

  mobileViewport.addEventListener('change', () => {
    const focusWasInMenu = navigation.contains(document.activeElement);
    const focusWasOnToggle = document.activeElement === menu;

    setMenuOpen(false);
    if (mobileViewport.matches && focusWasInMenu) menu.focus();
    if (!mobileViewport.matches && focusWasOnToggle) navigation.querySelector('a')?.focus();
  });
}

if ('IntersectionObserver' in window) {
  const hero = document.querySelector('.hero');

  if (header && hero) {
    header.classList.add('scroll-aware');
    const headerObserver = new IntersectionObserver(([entry]) => {
      header.classList.toggle('is-scrolled', !entry.isIntersecting);
    }, { rootMargin: '-88px 0px 0px 0px' });

    headerObserver.observe(hero);
  }

  // Animate on arrival, rather than hiding content while waiting for an observer.
  // The independent translate property leaves card hover transforms intact.
  const activeAnimations = new Set();
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      revealObserver.unobserve(entry.target);

      if (reducedMotion.matches || typeof entry.target.animate !== 'function') return;

      const animation = entry.target.animate([
        { opacity: 0, translate: '0 18px' },
        { opacity: 1, translate: '0 0' }
      ], {
        duration: 650,
        easing: 'cubic-bezier(.22, 1, .36, 1)'
      });

      activeAnimations.add(animation);
      const release = () => activeAnimations.delete(animation);
      animation.addEventListener('finish', release, { once: true });
      animation.addEventListener('cancel', release, { once: true });
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(
    '.story, .package, .about-copy, .manifesto-copy, .masonry a, .terms-grid'
  ).forEach(element => revealObserver.observe(element));

  reducedMotion.addEventListener('change', event => {
    if (event.matches) activeAnimations.forEach(animation => animation.cancel());
  });
}
