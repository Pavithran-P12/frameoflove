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

// Films carousel: arrow buttons step one tile at a time; native swipe/scroll still works.
const filmsTrack = document.querySelector('.films-track');
const carouselButtons = document.querySelector('.carousel-buttons');

if (filmsTrack && carouselButtons) {
  const prev = carouselButtons.querySelector('[data-carousel-prev]');
  const next = carouselButtons.querySelector('[data-carousel-next]');
  carouselButtons.hidden = false;

  const step = () => {
    const tile = filmsTrack.querySelector('.film-tile');
    const gap = parseFloat(getComputedStyle(filmsTrack).columnGap) || 0;
    return tile ? tile.getBoundingClientRect().width + gap : filmsTrack.clientWidth * 0.8;
  };

  const updateButtons = () => {
    const max = filmsTrack.scrollWidth - filmsTrack.clientWidth - 2;
    prev.disabled = filmsTrack.scrollLeft <= 2;
    next.disabled = filmsTrack.scrollLeft >= max;
    carouselButtons.hidden = max <= 0;
  };

  const behavior = () => (reducedMotion.matches ? 'auto' : 'smooth');
  prev.addEventListener('click', () => filmsTrack.scrollBy({ left: -step(), behavior: behavior() }));
  next.addEventListener('click', () => filmsTrack.scrollBy({ left: step(), behavior: behavior() }));
  filmsTrack.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
}

// Video tiles open in an in-page player; without JavaScript they link to YouTube.
const videoModal = document.querySelector('.video-modal');

if (videoModal && typeof videoModal.showModal === 'function') {
  const frame = videoModal.querySelector('.video-modal-frame');
  const closeButton = videoModal.querySelector('.video-modal-close');
  let opener = null;

  const closeVideo = () => { if (videoModal.open) videoModal.close(); };

  document.querySelectorAll('[data-video-id]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      opener = link;

      const { videoId, videoFormat, videoTitle } = link.dataset;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;
      iframe.title = videoTitle || 'Frame OF Love film';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;

      frame.classList.toggle('is-short', videoFormat === 'short');
      frame.replaceChildren(iframe);
      videoModal.setAttribute('aria-label', videoTitle || 'Video player');
      document.body.classList.add('video-open');
      videoModal.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', closeVideo);
  videoModal.addEventListener('click', event => {
    if (event.target === videoModal || event.target.classList.contains('video-modal-inner')) closeVideo();
  });
  videoModal.addEventListener('close', () => {
    frame.replaceChildren();
    document.body.classList.remove('video-open');
    opener?.focus();
  });
}

// Hero slideshow: cross-fades the background photos. Pauses for reduced motion,
// hidden tabs, and the visitor's own pause button.
const heroSlides = document.querySelector('[data-hero-slides]');
const heroNav = document.querySelector('.hero-slides-nav');

if (heroSlides && heroNav) {
  const slides = [...heroSlides.querySelectorAll('img')];
  const dots = heroNav.querySelector('.hero-dots');
  const pause = heroNav.querySelector('.hero-pause');
  const interval = 6500;
  let current = Math.max(0, slides.findIndex(slide => slide.classList.contains('is-active')));
  let timer = null;
  let userPaused = reducedMotion.matches;

  if (slides.length > 1) {
    const dotButtons = slides.map((slide, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Show photo ${index + 1} of ${slides.length}`);
      button.addEventListener('click', () => { show(index); restart(); });
      dots.append(button);
      return button;
    });

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
      dotButtons.forEach((button, i) => button.setAttribute('aria-current', String(i === current)));
    }

    function stop() { clearInterval(timer); timer = null; }
    function restart() {
      stop();
      if (!userPaused && !document.hidden) timer = setInterval(() => show(current + 1), interval);
    }
    function syncPause() {
      pause.setAttribute('aria-pressed', String(userPaused));
      pause.setAttribute('aria-label', userPaused ? 'Play slideshow' : 'Pause slideshow');
    }

    pause.addEventListener('click', () => { userPaused = !userPaused; syncPause(); restart(); });
    document.addEventListener('visibilitychange', restart);
    reducedMotion.addEventListener('change', event => { userPaused = event.matches; syncPause(); restart(); });

    heroNav.hidden = false;
    show(current);
    syncPause();
    restart();
  }
}
