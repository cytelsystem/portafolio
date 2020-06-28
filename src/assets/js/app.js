import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


// $(function () {
//   $(window).scroll(function () {
//     var winTop = $(window).scrollTop();
//     if (winTop >= 30) {
//       $("body").addClass("sticky-shrinknav-wrapper");
//       $("#herotext").addClass("herotext");
//       $("#grid-container-fluid").addClass("grid-container-fluid-color");
//     } else {
//       $("body").removeClass("sticky-shrinknav-wrapper");
//       $("#herotext").removeClass("herotext");
//       $("#grid-container-fluid").removeClass("grid-container-fluid-color");
//     }
//   });
// });




// FUNCIONA HEADER1

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
// FIN

//mostrar animacion 

// $('#panel').foundation('toggle');


// cambio en pixeles  media para narvar 


function myFunction(x) {
if (x.matches) { // Si la consulta de medios coincide
// document.body.style.backgroundColor = "yellow";
var b1 = document.querySelector("#id-inicio"); 
b1.setAttribute("data-offset", "400");
var b2 = document.querySelector("#id-acerca"); 
b2.setAttribute("data-offset", "320");
var b3 = document.querySelector("#id-conocimiento"); 
b3.setAttribute("data-offset", "320");
var b4 = document.querySelector("#id-experiencia"); 
b4.setAttribute("data-offset", "320");
var b5 = document.querySelector("#id-proyectos"); 
b5.setAttribute("data-offset", "320");
var b6 = document.querySelector("#id-aficiones"); 
b6.setAttribute("data-offset", "320");
var b7 = document.querySelector("#id-contacto"); 
b.setAttribute("data-offset", "320");
} else {
  var b1 = document.querySelector("#id-inicio"); 
  b1.setAttribute("data-offset", "0");
  var b2 = document.querySelector("#id-acerca"); 
  b2.setAttribute("data-offset", "0");
  var b3 = document.querySelector("#id-conocimiento"); 
  b3.setAttribute("data-offset", "0");
  var b4 = document.querySelector("#id-experiencia"); 
  b4.setAttribute("data-offset", "0");
  var b5 = document.querySelector("#id-proyectos"); 
  b5.setAttribute("data-offset", "0");
  var b6 = document.querySelector("#id-aficiones"); 
  b6.setAttribute("data-offset", "0");
  var b7 = document.querySelector("#id-contacto"); 
  b7.setAttribute("data-offset", "0");

}
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Llamar a la función de escucha en tiempo de ejecución
x.addListener(myFunction) // Adjuntar función de escucha en cambios de estado


