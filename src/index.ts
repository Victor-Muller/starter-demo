import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

window.Webflow ||= [];
window.Webflow.push(() => {
  // HERO CARDS ANIMATION
  $('[hero-card]').each(function () {
    let bigTitle = $(this).find('.hero-item-title_wrapper');
    let detailsTitle = $(this).find('.hero-details_h2');
    let detailsDivider = $(this).find('.hero-details_divider');
    let detailsText = $(this).find('.hero-details_text');
    let button = $(this).find('.button');
    let overlay = $(this).find('.hero-item_overlay');
    let card = $(this);
    let tlHero = gsap.timeline();

    tlHero
      .to(
        card,
        {
          flexBasis: 'auto',
          flexGrow: 4,
          flexShrink: 1,
          ease: CustomEase.create('custom', 'M0,0,C0.8,0,0.2,1,1,1'),
          duration: 1,
        },
        0
      )
      .to(
        bigTitle,
        { scale: 1.4, ease: CustomEase.create('custom', 'M0,0,C0.8,0,0.2,1,1,1'), duration: 1 },
        0
      )
      .from(detailsTitle, { opacity: 0, duration: 0.5 }, 1)
      .from(detailsDivider, { width: 0, duration: 0.5 }, '<0')
      .to(overlay, { opacity: 0.6, ease: 'none', duration: 0.3 }, '<0')
      .from(detailsText, { opacity: 0, y: 20, duration: 0.5 }, '<0.3')
      .from(button, { opacity: 0, y: 20, duration: 0.5 }, '<0')
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
