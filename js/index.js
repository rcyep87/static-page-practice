$(function(){
  $("[special=true]").css('color', 'red');
  // $("[special=true]").removeClass('black-background');

  $('#hug').click(function(){
    $('.test').show();
    // alert($(e.target).val());
  });
});
