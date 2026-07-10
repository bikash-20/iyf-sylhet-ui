import { animate } from 'https://cdn.jsdelivr.net/npm/framer-motion@11.11.5/dist/framer-motion.esm.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    animate(heroContent, { opacity: [0, 1], y: [24, 0], scale: [0.98, 1] }, { duration: 0.75, delay: 0.08 });
  }

  const heroImage = document.querySelector('.hero-img');
  if (heroImage) {
    animate(heroImage, { scale: [1.06, 1] }, { duration: 1.15, ease: 'easeOut' });
  }

  const pageHero = document.querySelector('.page-hero');
  if (pageHero) {
    animate(pageHero, { opacity: [0, 1], y: [18, 0] }, { duration: 0.7, delay: 0.1 });
  }

  const revealItems = Array.from(document.querySelectorAll('.card, .link-card, .event-row, .module, .form-panel, .contact-block, .course-meta, .smart-cell, .yt-frame, .gallery-grid figure, .map-box, .section-head'));

  revealItems.forEach((el, index) => {
    animate(el, { opacity: [0, 1], y: [20, 0], scale: [0.98, 1] }, { duration: 0.6, delay: 0.05 * index + 0.08 });
  });

  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
    animate(aboutText, { opacity: [0, 1], x: [20, 0] }, { duration: 0.7, delay: 0.1 });
  }

  const aboutImg = document.querySelector('.about-img');
  if (aboutImg) {
    animate(aboutImg, { opacity: [0, 1], x: [-20, 0] }, { duration: 0.7, delay: 0.08 });
  }

  const timelineRows = document.querySelectorAll('.t-row');
  timelineRows.forEach((el, index) => {
    animate(el, { opacity: [0, 1], x: [-14, 0] }, { duration: 0.55, delay: 0.08 * index + 0.1 });
  });
}
