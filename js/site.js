/**
 * Author:
 * Created:
 *
 * (c) Copyright
 **/

//these functions trigger the variable html within #spoutput

function alFunction() {
 $("#spoutput").html(
   "<h1>ALABAMA</h1>");
}
$('#AL').hover(alFunction);



function flFunction() {
  $("#FL").style.color= "red";
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

// create toggle onClick function
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
