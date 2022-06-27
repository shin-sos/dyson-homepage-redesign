$(function(){

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