
// Limit scope pollution from any deprecated API
(function() {

    var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };

    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};

    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }

// Chrome is Webkit, but Webkit is also Safari.
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }

    jQuery.browser = browser;

    jQuery.sub = function() {
        function jQuerySub( selector, context ) {
            return new jQuerySub.fn.init( selector, context );
        }
        jQuery.extend( true, jQuerySub, this );
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init( selector, context ) {
            if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
                context = jQuerySub( context );
            }

            return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        return jQuerySub;
    };

})();


var cns=0;
windowWdth=805;
var main_block_lngth=jQuery('.responsive_nav > ul').children('li').length;
var main_block_wdth=jQuery('.responsive_nav > ul').children('li').eq(0).outerWidth();





var main_block_height=$('.responsive_nav').css('height');
//////alert(main_block_height);

var finaly_wdth=0;
for (i=0; i < main_block_lngth; i++)
{finaly_wdth=finaly_wdth+jQuery('.responsive_nav > ul').children('li').eq(i).outerWidth()}





$(window).resize(function(){	

var w = $('.responsive_nav').width();
if(w > (finaly_wdth+80) ) {$('.responsive_nav > ul').css('display', 'block'); $('.responsive_nav').css('height', main_block_height); $('.responsive_nav li').not('.right_item').css('float', 'left'); 
 jQuery('.responsive_nav ul ul').css('left', '0');
 
 
 
jQuery('.responsive_nav ul ul ul').css('left', '100%');

$('li.right_item').css('display', 'block');   $('#pull').css('display', 'none')}
 else if (w < (finaly_wdth+80) && cns==0){$('.responsive_nav > ul').css('display', 'none');

jQuery('.responsive_nav ul ul').css('left', '0');

 $('.responsive_nav').css('height', 'auto'); $('.responsive_nav li').not('.right_item').css('float', 'none');  $('li.right_item').css('display', 'none');
 
 $('#pull').css('display', 'block');
 
 }
 
 
 
 
 
 else if (w < (finaly_wdth+80) && cns==1){$('.responsive_nav > ul').css('display', 'block'); $('.responsive_nav').css('height', 'auto'); 

 jQuery('.responsive_nav ul ul').css('left', '0');


$('.responsive_nav li').not('.right_item').css('float', 'none');    $('li.right_item').css('display', 'none');

$('#pull').css('display', 'block');
}


});



$(document).ready(function(){

var w = $('.responsive_nav').width();
if(w > (finaly_wdth+80)) {$('.responsive_nav > ul').css('display', 'block'); $('.responsive_nav').css('height', main_block_height);

$('.responsive_nav li').not('.right_item').css('float', 'left'); $('li.right_item').css('display', 'block');

$('#pull').css('display', 'none');

 }         
else {$('.responsive_nav > ul').css('display', 'none') ;   
 jQuery('.responsive_nav ul ul').css('left', '0');

 $('.responsive_nav').css('height', 'auto'); $('.responsive_nav li').not('.right_item').css('float', 'none'); $('li.right_item').css('display', 'none');
 $('#pull').css('display', 'block');
 
 
 }

 
 });
 
 
 
 
$('#pull').click(function()
{
if(cns==0){$('.responsive_nav > ul').css('display', 'block'),
cns=1;
}
else{$('.responsive_nav > ul').css('display', 'none'),
cns=0;
}
}
);
/////////for_IE8_and_IE9
 
 $(document).ready(function(){
 
 if ($.browser.msie) { 
 jQuery('.block_navigation ul ul').css('visibility', 'hidden').css('margin-top', '0');
 
 
jQuery('.block_navigation ul li').mouseover(
function()
{
jQuery(this).children('ul').eq(0).css('visibility', 'visible');

}

)
 
 jQuery('.block_navigation ul li').mouseout(
function()
{

jQuery(this).children('ul').eq(0).css('visibility', 'hidden');

}

)

}


}
) 


/***************************************************************/

          
	jQuery(document).ready(function() {
		var offset = 220;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.crunchify-top').fadeIn(duration);
			} else {
				jQuery('.crunchify-top').fadeOut(duration);
			}
		});
 
		jQuery('.crunchify-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
	});
/******************************Clock  Time and Date*********************************/
 var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("datetime").innerHTML = days[d.getDay()] + ' , ' +months[d.getMonth()] + '  ' + d.getDate() + ' ' + d.getFullYear();
/*Sunday , September 27 2015*/


/*************************Hide Show**************************************/
jQuery( document ).ready(function() {
    jQuery(".flip").click(function() {
    jQuery(this).parent().find(".panel").toggle("slow");
});
});

/*****************************Clock**************************************/
function updateClock ( )
 	{
 	var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	// Choose either "AM" or "PM" as appropriate
  	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  	// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
  	
  	
   	$("#time").html(currentTimeString);
   	  	
 }
$(document).ready(function()
{
   setInterval('updateClock()', 1000);
});


/*****************************Clock End**************************************/
 
 jQuery(function($) {
  $('.know-more-detail').each(function() {  
    $.data(this, 'dialog', 
      $(this).next('#open-modal').dialog({
        autoOpen: false,  
        modal: true,  
        title: 'Info',  
        width: '50%',   
        draggable: true  ,
		show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "fade",
        duration: 1000
      }
      })
    );  
  }).click(function() {  
      $.data(this, 'dialog').dialog('open');  
      return false;  
  });  
}); 


