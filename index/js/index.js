var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    speed:800,
    autoplay : 2000    
  }) 

  $('.message-task').on('click',function(e){
    e.stopPropagation();
    var target=$(e.target);
    if(target.is($('a'))){
      var message=target.parent();
      message.addClass('message-active')
      message.siblings().removeClass('message-active')
    }
    
  })

$('.msg-todo-num').each(function(index,item){
  var msgNum=$(item).parent().attr('data-msg-num');
  if(msgNum>999){
    msgNum='999+'
  }
  $(item).text(msgNum)
})