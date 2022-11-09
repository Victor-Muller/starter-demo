import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Animation Hero Cards
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

  // Set this to any speed you like,
  // everything will adjust to this setting
  var speed = 50;

  $(document).ready(function () {
    let tickerWidth = $('.features_wrapper').width();
    let spanWidth = $('.feature_item').width();

    gsap.set('.features_wrapper', { x: tickerWidth });

    // v = d/t ...
    // speed = moveX / duration ... so,
    // duration = moveX / speed

    // This is the inital tween from off-screen (right) to the starting point (0)
    // So its duration is based on the width of the visible ticker area
    let initDuration = tickerWidth / speed;

    // This is the tween of the entire span holding the text from 0 to -itsWidth
    // So its duration is based on the width of one span
    let loopDuration = spanWidth / speed;

    let tl = gsap.timeline();
    tl.to('.features_wrapper', { x: 0, ease: 'none', duration: initDuration });
    tl.to('.features_wrapper', { x: -spanWidth, ease: 'none', duration: loopDuration, repeat: -1 });
  });
});
