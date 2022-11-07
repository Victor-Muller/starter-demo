import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  const animationTitles = gsap.to('.hero-item-title_wrapper', {
    scale: 1.5,
    duration: 1.6,
    ease: 'power4.out',
    paused: true,
  });

  const animationCard = gsap.to('.hero-list_item.first', {
    flexGrow: 4,
    duration: 1.6,
    ease: 'power4.out',
    paused: true,
  });

  const cardItem = document.querySelector('.hero-item-content_wrapper');

  cardItem.addEventListener('mouseover', () => {
    animationTitles.play();
    animationCard.play();
  });

  cardItem.addEventListener('mouseout', () => {
    animationTitles.reverse();
    animationCard.reverse();
  });
});
