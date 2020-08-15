// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() 
{
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) 
    {
      x.className += " w3-show";
    } else 
    { 
      x.className = x.className.replace(" w3-show", "");
    }
}

//slide1
var slideIndex1 = 1;
showDivs1(slideIndex1);
  
function plusDivs1(n) 
{
    showDivs1(slideIndex1 += n);
}
  
function currentDiv1(n) 
{
    showDivs1(slideIndex1 = n);
}
  
function showDivs1(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("demo1");
    if (n > x.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex1-1].style.display = "block";  
    dots[slideIndex1-1].className += " w3-white";
}

//slide2
var slideIndex2 = 1;
showDivs2(slideIndex2);
  
function plusDivs2(n) 
{
    showDivs2(slideIndex2 += n);
}
  
function currentDiv2(n) 
{
    showDivs2(slideIndex2 = n);
}
  
function showDivs2(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    if (n > x.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " w3-white";
}

//slide3
var slideIndex3 = 1;
showDivs3(slideIndex3);
  
function plusDivs3(n) 
{
    showDivs3(slideIndex3 += n);
}
  
function currentDiv3(n) 
{
    showDivs3(slideIndex3 = n);
}
  
function showDivs3(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo3");
    if (n > x.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex3-1].style.display = "block";  
    dots[slideIndex3-1].className += " w3-white";
}

//slide4
var slideIndex4 = 1;
showDivs4(slideIndex4);
  
function plusDivs4(n) 
{
    showDivs4(slideIndex4 += n);
}
  
function currentDiv4(n) 
{
    showDivs4(slideIndex4 = n);
}
  
function showDivs4(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlides4");
    var dots = document.getElementsByClassName("demo4");
    if (n > x.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex4-1].style.display = "block";  
    dots[slideIndex4-1].className += " w3-white";
}

//slide5
var slideIndex5 = 1;
showDivs5(slideIndex5);
  
function plusDivs5(n) 
{
    showDivs5(slideIndex5 += n);
}
  
function currentDiv5(n) 
{
    showDivs5(slideIndex5 = n);
}
  
function showDivs5(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlides5");
    var dots = document.getElementsByClassName("demo5");
    if (n > x.length) {slideIndex5 = 1}
    if (n < 1) {slideIndex5 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex5-1].style.display = "block";  
    dots[slideIndex5-1].className += " w3-white";
}

//slide6
var slideIndex6 = 1;
showDivs6(slideIndex6);
  
function plusDivs6(n) 
{
    showDivs6(slideIndex6 += n);
}
  
function currentDiv6(n) 
{
    showDivs6(slideIndex6 = n);
}
  
function showDivs6(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlides6");
    var dots = document.getElementsByClassName("demo6");
    if (n > x.length) {slideIndex6 = 1}
    if (n < 1) {slideIndex6 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex6-1].style.display = "block";  
    dots[slideIndex6-1].className += " w3-white";
}

//slide7
var slideIndex7 = 1;
showDivs7(slideIndex7);
  
function plusDivs7(n) 
{
    showDivs7(slideIndex7 += n);
}
  
function currentDiv7(n) 
{
    showDivs7(slideIndex7 = n);
}
  
function showDivs7(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlides7");
    var dots = document.getElementsByClassName("demo7");
    if (n > x.length) {slideIndex7 = 1}
    if (n < 1) {slideIndex7 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex7-1].style.display = "block";  
    dots[slideIndex7-1].className += " w3-white";
}

//slide8
var slideIndex8 = 1;
showDivs8(slideIndex8);
  
function plusDivs8(n) 
{
    showDivs8(slideIndex8 += n);
}
  
function currentDiv8(n) 
{
    showDivs8(slideIndex8 = n);
}
  
function showDivs8(n) 
{
    var i;
    var x = document.getElementsByClassName("mySlides8");
    var dots = document.getElementsByClassName("demo8");
    if (n > x.length) {slideIndex8 = 1}
    if (n < 1) {slideIndex8 = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex8-1].style.display = "block";  
    dots[slideIndex8-1].className += " w3-white";
}