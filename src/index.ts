import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

window.Webflow ||= [];
window.Webflow.push(() => {
  // FADE IN ANIMATIONS

  // Hero

  let heroCards = $('.hero-list_item');
  let heroInfo = $('[hero-info]');
  let logo = $('.hero-logo_image');
  let arc = $('.hero-arc_component');
  let arrow = $('.hero-arrow_link');
  let heroIntro = gsap.timeline();

  heroIntro
    .from(logo, { opacity: 0, duration: 1 }, 0.3)

    .from(
      heroCards,
      {
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        duration: 1,
      },
      '<0.2'
    )

    .from(
      heroInfo,
      {
        y: 20,
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        ease: 'power2.out',
        duration: 1,
      },
      '<0.1'
    )
    .from(
      arc,
      {
        y: 20,
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        ease: 'power2.out',
        duration: 1,
      },
      '<0.1'
    )
    .from(
      arrow,
      {
        y: 20,
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        ease: 'power2.out',
        duration: 1,
      },
      '<0.1'
    );

  // HERO CARDS ANIMATION
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth > 992) {
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
        .fromTo(detailsTitle, { opacity: 0 }, { opacity: 1 }, 0.5)
        .to(detailsDivider, { width: '100%' }, '<0')
        .fromTo(detailsText, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '<0')
        .fromTo(button, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '<0.3')
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
  } else {
  }
  // General fade up
  $('[fade-up]').each(function () {
    let fadeUp = $(this);

    gsap.from(fadeUp, {
      opacity: 0,
      y: 80,
      scale: 0.95,
      duration: 1,
      scrollTrigger: this,
      ease: 'power2.out',
      delay: 0.3,
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
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          slidesToShow: 1.5,
          initialSlide: 0,
          variableWidth: false,
          infinite: false,
          centerPadding: 0,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1.3,
        },
      },
    ],
  });

  $('.services-carousel-content_wrapper').slick({
    asNavFor: '.services-carousel-top_wrapper',
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    arrows: false,
    speed: 0,
    initialSlide: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          initialSlide: 0,
          speed: 300,
          infinite: false,
        },
      },
    ],
  });

  // FEATURES CAROUSEL ANIMATION

  // Fade up title

  $('.services-carousel-content_wrapper').on(
    'afterChange',
    function (event, slick, currentSlide, nextSlide) {
      if (viewportWidth > 767) {
        gsap.from('.services-carousel-item_content', {
          opacity: 0,
          y: 50,
          ease: 'power4.out',
          duration: 1,
        });
      }
    }
  );
});
