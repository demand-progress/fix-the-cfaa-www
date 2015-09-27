var _jail;

window.fbAsyncInit = function() {
    FB.init({
      // appId      : '262278033862810', // App ID
      appId      : '299565913507038', // App ID
      channelUrl : '//www.fixthecfaa.com/channel.html', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

	if(!_jail) _jail = new Jail(FB);
  $('a.fb-login').click(_jail.login);
  // $('#friend_grid').on('click', 'div.friend', _jail.post);
};

function Jail(FB){

	$('.fb-post').click(function(){
	  var message = $(this).text();
	  
	  FB.ui({
			name : message,
			description : "Click here to fight to reform the CFAA: This ridiculous law even makes it a crime to violate a website's terms of service!",
			picture : 'http://d25ys2qxefvvg9.cloudfront.net/image.php?id=' + me_info.id,
			caption : me_info.name+" is in jail!",
			link : 'http://www.fixthecfaa.com/?m=1',
			method : 'feed'
		}, function(response){
			if(response && response.post_id) {
				
			} else {

			}
		});
	  return false;
	});
	
	
	var perms = '';
	var friends = [];
  // var detained = $.jStorage.get('jail.detained') || [];
	var high_score = 0;
	var fb_me, me_info;
	var page = 0;
	var per_page = 24;
	var self = this;
	var is_logging_in = false;
	
	
	
	function _logged_in(){
		$('div.logged-in').show();
		$('div.logged-out').hide();
		
		FB.api('/me', function(response){
			me_info = response;
			$('#me_bars').attr('src', 'http://d25ys2qxefvvg9.cloudfront.net/image.php?id=' + me_info.id);
			// me_bars
		});
		
		// they clicked log in for the first time
		if(is_logging_in){
			is_logging_in = false;
    }

	}
	
	function _logged_out(){
		$('.logged-in').hide();
		$('.logged-out').show();
		$('.loading').hide();
		
		// they clicked log in but didnt approve all the perms
		if(is_logging_in){
			is_logging_in = false;
		}
	}
	
	function _check_perms(){
		FB.getLoginStatus(function(response) {

        if(response.authResponse) {
            _logged_in();
            
	        // user is not connected to the app
        } else {
				  _logged_out();
	      }
	    });
	}
	_check_perms();
	
	this.login = function(){
		is_logging_in = true;
		FB.login(function(response){
			_check_perms();
			
		});
		return false;
	}
	
	
	
	
}
 
$(document).ready(function() {
	(function(d){
	    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	    if (d.getElementById(id)) {return;}
	    js = d.createElement('script'); js.id = id; js.async = true;
	    js.src = "//connect.facebook.net/en_US/all.js";
	    ref.parentNode.insertBefore(js, ref);
	}(document));
	
	
	
});