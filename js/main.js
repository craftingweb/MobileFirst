$(function () {
  $(".top-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="slick-next slick-arrow"><img src="/images/back.svg"></button>',
    prevArrow:
      '<button type="button" class="slick-prev slick-arrow"><img src="/images/forward.svg"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
