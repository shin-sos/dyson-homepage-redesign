$(function(){

    $(".slide").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $(".slide1").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });


    

    $('nav li, .sub > div').on({
      mouseenter:function(){
        let idx = $(this).index();
        $('.sub > div').hide();
        $('.sub > div').eq(idx).stop().slideDown(300);
      },
      mouseleave:function(){
        let idx = $(this).index();
        $('.sub > div').eq(idx).stop().slideUp(300);
      }
    })




});