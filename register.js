$(function(){
  var $name = $('#name'),
      $phone = $('#phone'),
      $pwd = $('#pwd'),
      $num = $('#num');
  var $msgname = $('#msgname'),
      $msgphone = $('#msgphone'),
      $msgpwd = $('#msgpwd'),
      $msgnum = $('#msgnum'),
      $btn = $('button');
  $name.blur(function(){
    if($name.val() === ''){
      $msgname.html('用户名不能为空！');
      return false;
    }
    if($name.val() !== ''){
      $msgname.html('');
      return true;
    }
  })
  $btn.click(function(){
    console.log('ddd');
  })


})
