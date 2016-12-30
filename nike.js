// DISPLAY PINK SHOE

$(document).ready(function(){
		$("#mini-shoe1").click(function(){
			$("#rasta_shoe").css("display", "none");
			$("#pink_shoe").css("display", "block");
		});
});

// DISPLAY GREEN SHOE

$(document).ready(function(){
		$("#mini-shoe2").click(function(){
			$("#rasta_shoe").css("display", "block");
			$("#pink_shoe").css("display", "none");
		});
});

// DISPLAY LIKE PNG RED

$(document).ready(function(){
		$("#wish").click(function(){
			$("#wish-liked").css("display", "block");
			$("#wish").css("display", "none");
		});
});

// DISPLAY LIKE PNG NORMAL

$(document).ready(function(){
		$("#wish-liked").click(function(){
			$("#wish").css("display", "block");
			$("#wish-liked").css("display", "none");
		});
});

// DISPLAY SEARCH BOX 

$(document).ready(function(){
		$("#search_input").hover(function(){
			$("#search_input").html("<input type='text' placeholder='blabla'/>").css("transition", "0.9s");
		});
});


// UNDISPLAY SEARCH BOX 

$(document).ready(function(){
		$("body").click(function(){
			$("#search_input")
		});
});


// FIXED PRODUCT BOX 
/*
jQuery(function($) {
  function fixDiv() {
    var $cache = $('#box');
    if ($(window).scrollTop() > 1182 && $(window).scrollTop() < 1400)
      $cache.css({
        'position': 'fixed',
      });
    else
      $cache.css({
        'position': 'fixed',
      });
  }
  $(window).scroll(fixDiv);
  fixDiv();
});

*/