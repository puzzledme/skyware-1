$(document).ready(function(){
    $('.supportedBy__section_content').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    responsive: [
        {
          breakpoint: 504,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});