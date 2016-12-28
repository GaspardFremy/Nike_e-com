
var x = document.getElementById("mini-shoe1");
var y = document.getElementById("mini-shoe2");
var z = document.getElementById("wish");
var a = document.getElementById("wish-liked");
var w = document.getElementById("windows");


x.addEventListener("click", display_pink);
y.addEventListener("click", display_rasta);
z.addEventListener("click", display_wish);
a.addEventListener("click", display_wish_liked);


function display_pink(){
    document.getElementById('pink_shoe').style.display = 'block';
    document.getElementById('rasta_shoe').style.display = 'none';
}

function display_rasta(){
    document.getElementById('pink_shoe').style.display = 'none';
    document.getElementById('rasta_shoe').style.display = 'block';
}

function display_wish(){
    document.getElementById('wish').style.display = 'none';
    document.getElementById('wish-liked').style.display = 'block';
}

function display_wish_liked(){
    document.getElementById('wish').style.display = 'block';
    document.getElementById('wish-liked').style.display = 'none';
}


function display_box() {
    
if (window.pageYOffset >= 670 && window.pageYOffset <= 1391 ){
    document.getElementById('box').style.position = 'fixed';
    document.getElementById('box').style.marginRight = '50px';
    document.getElementById('box').style.marginTop = '0px';
    
    console.log(window.pageYOffset)
}

    
if (window.pageYOffset <= 669 || window.pageYOffset >= 1392 ){
    document.getElementById('box').style.position = 'absolute';
    document.getElementById('box').style.marginRight = '0px';
    document.getElementById('box').style.marginTop = '100px';
    
    console.log(window.pageYOffset)
}
    
}


setInterval(display_boxe, 1000);
