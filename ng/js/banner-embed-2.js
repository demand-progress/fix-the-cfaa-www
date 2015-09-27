((function(){
  var url = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dihq71mhvy8o7.cloudfront.net/';
  
  function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value + "; path=/";
  };
  
  function getCookie(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
  };
  
  if(getCookie('_dp_cfaa')){  return;  };
  
  (function(window, document, version, callback) {

    var link = document.createElement("link");
    link.setAttribute("rel","stylesheet");
    link.setAttribute("href",url + "css/banner.css");
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);

    var j, d;
    var loaded = false;
    if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";
        script.onload = script.onreadystatechange = function() {
            if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                callback((j = window.jQuery).noConflict(1), loaded = true);
                j(script).remove();
            }
        };
        document.documentElement.childNodes[0].appendChild(script)
    }

  })(window, document, "1.7", function($, jquery_loaded) {

    $(document).ready(function() {
      var speed = 300;
      $.ajax({
        url : url + 'banner.html?v=1',
        dataType : 'jsonp',
        jsonpCallback : 'dp',
        success : function(response){
          var banner = response.html;
          var over = $('<div>').css({
            zIndex : 9998,
            position : 'fixed',
            top : 0,
            left : 0,
            width: '100%',
            height: 77
          }).append(banner);
          $('body').prepend(over);
          
          var close = $('<a>').css({
            background : "url('"+url+"images/close.png')",
            width: 30,
            height: 30,
            position:'absolute',
            top: 0,
            right : 0,
            cursor : 'pointer'
          }).click(function(){
            setCookie('_dp_cfaa', '1', 1000);
            over.remove();
          });
          over.find('.banner-form:first').append(close);
          
          $('#dp_aarons_law_banner input[type=text]').each(function(){
            $(this).val($(this).attr('placeholder'));
          });
          $('#dp_aarons_law_banner').on('focus', 'input[type=text]', function(){
            if($(this).val() === $(this).attr('placeholder')) $(this).val('');
            
            var extras = $('#dp_aarons_law_banner .extra');
            if(!extras.hasClass('dp_open')){
              extras.addClass('dp_open').fadeIn(speed);
              $('#dp_aarons_law_banner .dp-form-submit').animate({
                'margin-top' : 31
              }, speed);
              
            }
          })
          .on('blur', 'input[type=text]', function(){
            if($(this).val() === '') $(this).val($(this).attr('placeholder'));
            
            setTimeout(function(){
              var extras = $('#dp_aarons_law_banner .extra');
              if($('#dp_aarons_law_banner input[type=text]').is(':focus')) return;
              
              extras.removeClass('dp_open').fadeOut(speed);
              $('#dp_aarons_law_banner .dp-form-submit').animate({
                'margin-top' : 1
              }, speed);
              
            }, 500);
          });
        }
      });
  	});
  });
})());