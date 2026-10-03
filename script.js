const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  setTimeout(() => loader?.classList.add('hide'), 450);
});

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');

    nav.style.display = open ? 'flex' : '';

    if (open) {
      nav.style.position = 'absolute';
      nav.style.top = '70px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.padding = '25px 7vw';
      nav.style.background = '#171613';
      nav.style.flexDirection = 'column';
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');

      if (window.innerWidth <= 800) {
        nav.style.display = '';
      }
    });
  });
}

// Smooth scrolling for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const id = link.getAttribute('href');

    if (id === '#') return;

    const target = document.querySelector(id);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll reveal animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

// Elements that animate when entering the viewport
document
  .querySelectorAll(
    '.story, .package, .service, .about-copy, .manifesto-copy, .gallery img, .terms-grid'
  )
  .forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(22px)';
    element.style.transition =
      'opacity .8s ease, transform .8s ease';

    observer.observe(element);
  });

// Wedding film / showreel button
const playButton = document.querySelector('.play');

if (playButton) {
  playButton.addEventListener('click', () => {
    const instagramUrl =
      'https://www.instagram.com/frame__of__love';

    window.open(
      instagramUrl,
      '_blank',
      'noopener,noreferrer'
    );
  });
}

// ---------------------------------------
// FRAME OF LOVE CONTACT INFORMATION
// ---------------------------------------

// WhatsApp:
// https://wa.me/918508301446

// Phone:
// tel:+918508301446

// Instagram:
// https://www.instagram.com/frame__of__love

// Google Maps:
// https://maps.app.goo.gl/wSCaZ86pL4m23JdMA