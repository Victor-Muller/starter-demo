import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  $('[hero-card]').each(function () {
    let bigTitle = $(this).find('.hero-item-title_wrapper');
    let detailsTitle = $(this).find('.hero-details_h2');
    let detailsDivider = $(this).find('.hero-details_divider');
    let detailsText = $(this).find('.hero-details_text');
    let card = $(this);
    let tl = gsap.timeline();

    tl.to(card, { flexGrow: 4 }, 0)
      .to(bigTitle, { scale: 1.4, ease: 'circ.out ' }, 0)
      .from(detailsTitle, { opacity: 0 }, 0)
      .from(detailsDivider, { width: 0 }, 0)
      .from(detailsText, { opacity: 0, y: 20 }, 0)
      .reversed(true);
    this.animation = tl;
  });

  $('[hero-card]').on('mouseover', function () {
    console.log('open');
    this.animation.play();
  });

  $('[hero-card]').on('mouseout', function () {
    console.log('close');
    this.animation.reverse();
  });
});
