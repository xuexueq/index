var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    speed:800,
    autoplay : 2000    
  }) 

  $('.message-task').on('click',function(e){
    e.stopPropagation();
    var target=e.target;
    var message=$(target).parent()
    message.addClass('message-active')
    message.siblings().removeClass('message-active')
  })       