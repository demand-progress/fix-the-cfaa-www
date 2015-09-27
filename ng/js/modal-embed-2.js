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
  
  // if(getCookie('_dp_cfaa')){  return;  };
  setCookie('_dp_cfaa', '1', 1000);
  
  (function(window, document, version, callback) {

    var link = document.createElement("link");
    link.setAttribute("rel","stylesheet");
    link.setAttribute("href",url + "css/modal.css");
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
      if($(window).width() < 658) return;
      
      $.ajax({
        url : url + 'modal-no-social.html',
        dataType : 'jsonp',
        jsonpCallback : 'dp',
        success : function(response){
          var modal  = response.html;
          var over = $('<div>').addClass('_dp_cfaa_overlay').css({
            background : "url('"+url+"images/modal-over-bg.png')",
            zIndex : 9998,
            position : 'fixed',
            top : 0,
            left : 0,
            width: '100%',
            height: '100%'
          }).hide().click(function(ev){
            if($(ev.target).hasClass('_dp_cfaa_overlay')){
             $(this).remove();
            }
          });

          var close = $('<a>').css({
            background : "url('"+url+"images/close.png')",
            width: 30,
            height: 30,
            position:'absolute',
            top: -15,
            right : -15,
            cursor : 'pointer'
          }).click(function(){
            over.remove();
          });

          $('body').prepend(over.fadeIn(function(){
            $(this).append(modal);
            var left = parseInt(($(window).width() - $('#dp_aarons_law_modal').width())/2);
            var top = 10;
            if(($(window).height() - $('#dp_aarons_law_modal').height() - top) > 0){
              top = parseInt(($(window).height() - $('#dp_aarons_law_modal').height())/3);
            }

            $('#dp_aarons_law_modal')
              .css({
                left : left,
                top : top
              })
              .append(close)
              .on('focus', 'input[type=text]', function(){
                if($(this).val() === $(this).attr('placeholder')) $(this).val('');
              })
              .on('blur', 'input[type=text]', function(){
                if($(this).val() === '') $(this).val($(this).attr('placeholder'));
              });
          }));
        }
      });
  	});
  });
})());