//$(function(){
//  $('h1').css('color','red');
//  $('.parrafo').css('color','green');
//  $('#subtitulo').css('color','purple');
//});
var parrafos;
var titulos;
var subtitulo;
document.addEventListener('DOMContentLoaded',function(){
  //subtitulo = document.getElementById('subtitulo');
  //subtitulo.style.color = "red";
  //parrafos = document.getElementsByClassName('parrafo');
  //parrafos[0].style.color = "green";
  //parrafos[1].style.color = "purple";
  //titulos = document.getElementsByTagName('h1');

  parrafos = document.querySelectorAll('.parrafo');
  parrafos[0].style.color = "red";
  parrafos[1].style.color = "green";

});