import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

window.Webflow ||= [];
window.Webflow.push(() => {
  $('.hero-list_item').each(function () {
    let card = $(this);
    let bigTitle = $(this).find('.hero_h1');
    let detailsTitle = $(this).find('.hero-details_h2');
    let detailsDivider = $(this).find('.hero-details_divider');
    let detailsText = $(this).find('.hero-details_text');
    let overlay = $(this).find('.hero-item_overlay');
    let button = $(this).find('.button');
    let animCard = gsap.timeline();
    let animContent = gsap.timeline();

    animCard
      .to(
        card,
        { flexGrow: 4, ease: CustomEase.create('custom', 'M0,0,C0.8,0,0.2,1,1,1'), duration: 1 },
        0
      )
      .reversed(true);

    animContent
      .to(bigTitle, { letterSpacing: 15, autoRound: false, duration: 1 }, 0)
      .to(overlay, { opacity: 0.6, duration: 0.3 }, 0)
      .to(detailsTitle, { opacity: 1 }, 0.5)
      .to(detailsDivider, { width: '100%' }, '<0')
      .to(detailsText, { opacity: 1, y: 0 }, '<0')
      .to(button, { opacity: 1, y: 0 }, '<0.3')
      .reversed(true);

    card.on('mouseover', function () {
      animCard.play();
      animContent.timeScale(1).play();
    });

    card.on('mouseout', function () {
      animContent.timeScale(2).reverse();
      animCard.reverse();
    });
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
    initialSlide: 1,
  });

  // FEATURES CAROUSEL ANIMATION

  // Fade up title
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
