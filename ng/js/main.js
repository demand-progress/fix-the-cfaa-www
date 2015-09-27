$(document).ready(function() {
  var url = '//dihq71mhvy8o7.cloudfront.net/';
  var codes = {
    banner : '<script src="'+url+'js/banner-embed.js" type="text/javascript" charset="utf-8"></script>',
    modal : '<script src="'+url+'js/modal-embed.js" type="text/javascript" charset="utf-8"></script>',
    badge : '<a href="http://www.fixthecfaa.com"><img src="'+url+'images/justice-for-aaron.jpg" /></a>'
  }
  function _check_code(){
    if($('textarea.embed-code')[0])
      $('textarea.embed-code').val(codes[$('input[name=option]:checked').val().replace('<', '&lt;').replace('>', '&gt;')]);
  }
  
  $('input[type=text]').each(function(){
    $(this).val($(this).attr('placeholder'));
  });
  $('body').on('focus', 'input[type=text]', function(){
    if($(this).val() === $(this).attr('placeholder')) $(this).val('');
  })
  .on('blur', 'input[type=text]', function(){
    if($(this).val() === '') $(this).val($(this).attr('placeholder'));
  })
  .on('click', 'input[name=option]', _check_code);
  _check_code();
  
  $('textarea.embed-code').focus(function(){
    $(this).select();
  }).mouseup(function(e){
    e.preventDefault();
  })
});
