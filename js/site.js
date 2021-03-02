/**
 * Author:
 * Created:
 *
 * (c) Copyright
 **/

 //Topic 1: clickable flags
   //click on flag images to make text appear
   $(".popuptext").on('click', function () {
       $(this).children(".hidden").toggle();
   });



//Topic 2: these functions trigger the variable html within #spoutput

function alFunction() {
 $("#spoutput").html(
   "<h1>ALABAMA</h1>");
}
$('#AL').hover(alFunction);



function flFunction() {
 $("#spoutput").html(
   "<h1>FLORIDA</h1>"


);
}
$('#FL').hover(flFunction);



function ilFunction() {
 $("#spoutput").html(
   "<h1>ILLINOIS</h1>"


);
}
$('#IL').hover(ilFunction);



function laFunction() {
 $("#spoutput").html(
   "<h1>LOUISIANA</h1>"


);
}
$('#LA').hover(laFunction);



function msFunction() {
 $("#spoutput").html(
   "<h1>MISSISSIPPI</h1>"


);
}
$('#MS').hover(msFunction);



function ncFunction() {
 $("#spoutput").html(
   "<h1>NORTH CAROLINA</h1>"


);
}
$('#NC').hover(ncFunction);



function okFunction() {
 $("#spoutput").html(
   "<h1>OKLAHOMA</h1>"


);
}
$('#OK').hover(okFunction);


function txFunction() {
 $("#spoutput").html(
   "<h1>TEXAS</h1>"


);
}
$('#TX').hover(txFunction);


//end spoutput functions

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//toggling visibility of panels 1-6 for topic 3
$("#flip1").click(function() {
  $("#panel1").toggle();
})

$("#flip2").click(function() {
  $("#panel2").toggle();
})

$("#flip3").click(function() {
  $("#panel3").toggle();
})

$("#flip4").click(function() {
  $("#panel4").toggle();
})

$("#flip5").click(function() {
  $("#panel5").toggle();
})
$("#flip6").click(function() {
  $("#panel6").toggle();
})
