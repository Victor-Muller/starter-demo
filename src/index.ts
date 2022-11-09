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

  // Slick carousel

  $('.services-carousel-top_wrapper').slick({
    centerMode: true,
    slidesToShow: 1,
    infinite: true,
    centerPadding: 0,
    variableWidth: true,
    focusOnSelect: true,
    initialSlide: 1,
    prevArrow: '.services-carousel-left-arrow_link',
    nextArrow: '.services-carousel-right-arrow_link',
    asNavFor: '.services-carousel-content_wrapper',
  });

  $('.services-carousel-content_wrapper').slick({
    asNavFor: '.services-carousel-top_wrapper',
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    arrows: false,
  });
});
