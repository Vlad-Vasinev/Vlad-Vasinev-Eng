$(function () {

  $(".rate").rateYo({
    starWidth: "30px",
    normalFill: "#ccccce",
    ratedFill: "#FE3438",
    readOnly: true,
    spacing: '25px',
    
  });
  
  $('.reviews__slider').slick({
    dots: true,
    prevArrow: $('.btn-prev'),
    nextArrow: $('.btn-next')
  });

});