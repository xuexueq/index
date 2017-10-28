$().ready(function(){
  //refer: https://github.com/sandywalker/webui-popover
  $('.language').webuiPopover({
    container:$('.language'),
    url:'.lg-items',
    width:'106px',
    arrow:false,
    padding:false
  });
  $('.lg-items').on('click',function(e){
    e.stopPropagation()
    var target=e.target;
    $(target).addClass('active')
    $(target).siblings().removeClass('active')
    var targetValue=$(target).text().trim()
    WebuiPopovers.hideAll()
    $('.lg-place').text(targetValue)
  })
  $('.login-btn').on('click',function(e){
    e.preventDefault();
    var username=$('.login-input input[type="text"]').val()
    var password=$('.login-input input[type="password"]').val()
    if(!username || !password){
      $('.login-input .showError').show()
      $('.login-input .showError').text('不能为空')
      return
    }
    if(password.length<6){
      $('.login-input .showError').show()
      $('.login-input .showError').text('密码长度不得小于6')
      return
    }
    $('.login-input .showError').hide()
    $.ajax({
      url:'',
      data:{
        username:username,
        password:password
      },
      success:function(){
        console.log('success')
      },
      error:function(){
        $('.login-input .showError').show()
        $('.login-input .showError').text('用户名与密码不匹配')
      }
    })
  })
})
