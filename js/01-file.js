'use strict'
var mybutton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";  
    }else{
        mybutton.style.display = "none";
    }
}
function topfunction() {
    window.scrollTo(0,0);            
}