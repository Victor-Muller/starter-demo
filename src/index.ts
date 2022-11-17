import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

window.Webflow ||= [];
window.Webflow.push(() => {
  // new version
  // doit faire monter d'un crant les animations master, pour pouvoir faire un reverse sur les animContent

  $('.hero-list_item').each(function () {
    let card = $(this);
    let bigTitle = $(this).find('.hero_h1');
    let detailsTitle = $(this).find('.hero-details_h2');
    let detailsDivider = $(this).find('.hero-details_divider');
    let detailsText = $(this).find('.hero-details_text');
    let overlay = $(this).find('.hero-item_overlay');
    let button = $(this).find('.button');

    card.on('mouseover', function () {
      let animCard = gsap.timeline();
      let animContent = gsap.timeline();

      animCard
        .to(
          card,
          { flexGrow: 4, ease: CustomEase.create('custom', 'M0,0,C0.8,0,0.2,1,1,1'), duration: 1 },
          0
        )
        .to(overlay, { opacity: 0.6, duration: 0.3 }, 0)
        .to(bigTitle, { letterSpacing: 15, autoRound: false }, 0)
        .to(bigTitle, { opacity: 0.3 }, 0);

      animContent
        .to(detailsTitle, { opacity: 1 }, 0.5)
        .to(detailsDivider, { width: '100%' }, '<0')
        .to(detailsText, { opacity: 1, y: 0 }, '<0')
        .to(button, { opacity: 1, y: 0 }, '<0.3');

      let masterIn = gsap.timeline();
      masterIn.add(animCard, 0).add(animContent, 0);
    });

    card.on('mouseout', function () {
      let animOutCard = gsap.timeline();
      let animOutContent = gsap.timeline();

      animOutCard
        .to(
          card,
          { flexGrow: 1, ease: CustomEase.create('custom', 'M0,0,C0.8,0,0.2,1,1,1'), duration: 1 },
          0
        )
        .to(overlay, { opacity: 0 }, 0);

      animOutContent
        .to(bigTitle, { opacity: 1, letterSpacing: 0, autoRound: false, duration: 0.3 }, 0)
        .to(detailsTitle, { opacity: 0, duration: 0.3 }, 0)
        .to(detailsDivider, { width: 0, duration: 0.3 }, 0)
        .to(detailsText, { opacity: 0, y: 20, duration: 0.3 }, 0)
        .to(button, { opacity: 0, y: 20, duration: 0.3 }, 0);

      let masterOut = gsap.timeline();
      masterOut.add(animOutCard, 0).add(animOutContent, 0);
    });
  });

  //old version
  // HERO CARDS ANIMATION
  //  $('[hero-card]').each(function () {
  //    let bigTitle = $(this).find('.hero-item-title_wrapper');
  //    let detailsTitle = $(this).find('.hero-details_h2');
  //    let detailsDivider = $(this).find('.hero-details_divider');
  //    let detailsText = $(this).find('.hero-details_text');
  //    let button = $(this).find('.button');
  //    let overlay = $(this).find('.hero-item_overlay');
  //    let card = $(this);
  //    let tlHero = gsap.timeline();
  //
  //    tlHero
  //      .to(
  //        card,
  //        {
  //          flexBasis: 'auto',
  //          flexGrow: 4,
  //          flexShrink: 1,
  //          ease: CustomEase.create('custom', 'M0,0,C0.8,0,0.2,1,1,1'),
  //          duration: 1,
  //        },
  //        0
  //      )
  //      .to(
  //        bigTitle,
  //        { scale: 1.4, ease: CustomEase.create('custom', 'M0,0,C0.8,0,0.2,1,1,1'), duration: 1 },
  //        0
  //      )
  //      .from(detailsTitle, { opacity: 0, duration: 0.5 }, 1)
  //      .from(detailsDivider, { width: 0, duration: 0.5 }, '<0')
  //      .to(overlay, { opacity: 0.6, ease: 'none', duration: 0.3 }, '<0')
  //      .from(detailsText, { opacity: 0, y: 20, duration: 0.5 }, '<0.3')
  //      .from(button, { opacity: 0, y: 20, duration: 0.5 }, '<0')
  //      .reversed(true);
  //    this.animation = tlHero;
  //  });
  //
  //  $('[hero-card]').on('mouseover', function () {
  //    this.animation.play();
  //  });

  //$('[hero-card]').on('mouseout', function () {
  //  this.animation.reverse();
  //});

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
