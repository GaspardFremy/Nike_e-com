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
			$("#search_input").html("<input type='text' placeholder='enter your search'/>").css("transition", "0.9s");
		});
});

// UNDISPLAY SEARCH BOX 

$(document).ready(function(){
		$("#search").click(function(){
			$("#search_input").html("<a><li>SEARCH</a></li>");
		});
});

// ADD TO CARTE INCREMENT

var rQuote = "(",
    lQuote = ")",
    test = 0 ;

$(document).ready(function(){
		$(".add_to_cart").click(function(){
            test ++; 
            document.getElementById("articles").innerHTML = rQuote + test + lQuote;
		});
});

// PRODUCT BOX DISPLAY

jQuery(function($) {
  function fixDiv() {
      
    var $cache = $('#box');
      
    if ($(window).scrollTop() < 540)
        
        $cache.fadeOut().css({
        'position': 'absolute',
        });
    
    else if ($(window).scrollTop() > 540 && $(window).scrollTop() < 1312)

        $cache.fadeIn().css({
        'position': 'fixed',
        'right': '94px', 
        });
      
    else
        
        $cache.css({
        'position': 'absolute',
        'right': '48px',
        });
  }
    
  $(window).scroll(fixDiv);
  fixDiv();
});

/* 
Barème :

respect de la maquette 6 points, 
Propreté du code 4 points,
HTML / CSS 6 points,
JS 3 points,
Animations / Transition 1 point,
BONUS 0-2 points (cookies…)
*/