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


function init(){
    const elThumb=document.querySelectorAll('.ex1 li'),
        elDetail=document.querySelector('.ex1>div>div>img'),
        elPtag=document.querySelector('.ex1 p');

        let elOffset = [];
        elThumb.forEach(function(el,key){
            elOffset.push(
                {
                    w:el.offsetWidth,
                    h:el.offsetHeight,
                    x:el.offsetLeft,
                    y:el.offsetTop
                }
            )
            el.onclick = function(){
                elDetail.src=el.children[0].src;

                elPtag.style = `
                width:${el.offsetWidth}px;
                height:${el.offsetHeight}px;
                left:${el.offsetLeft}px;
                top:${el.offsetTop}px;
                `;
            }
        })
        
}
window.onload = init;