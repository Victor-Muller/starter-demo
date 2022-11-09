import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  // HERO CARDS ANIMATION
  $('[hero-card]').each(function () {
    let bigTitle = $(this).find('.hero-item-title_wrapper');
    let detailsTitle = $(this).find('.hero-details_h2');
    let detailsDivider = $(this).find('.hero-details_divider');
    let detailsText = $(this).find('.hero-details_text');
    let button = $(this).find('.button');
    let card = $(this);
    let tlHero = gsap.timeline();

    tlHero
      .to(card, { flexGrow: 3, ease: 'sine.out', duration: 0.5 }, 1)
      .to(bigTitle, { scale: 1.4, ease: 'power4.out', duration: 0.5 }, 0)
      .from(detailsTitle, { opacity: 0, duration: 0.5 }, 0)
      .from(detailsDivider, { width: 0, duration: 0.5 }, 0)
      .from(detailsText, { opacity: 0, y: 20, duration: 0.5 }, 0)
      .from(button, { opacity: 0, y: 20, duration: 0.5 }, 0)
      .reversed(true);
    this.animation = tlHero;
  });

  $('[hero-card]').on('mouseover', function () {
    this.animation.play();
  });

  $('[hero-card]').on('mouseout', function () {
    this.animation.reverse();
  });

  // FEATURES CAROUSEL

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
    speed: 0,
  });

  // FEATURES CAROUSEL ANIMATION
  $('.services-carousel-content_wrapper').on(
    'afterChange',
    function (event, slick, currentSlide, nextSlide) {
      gsap.from('.services-carousel-item_content', {
        opacity: 0,
        y: 50,
        ease: 'power4.out',
        duration: 1,
      });
    }
  );
});
