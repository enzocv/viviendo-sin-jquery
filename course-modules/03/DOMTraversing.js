//var item3 = $('#item');
//item3.css('background', 'yellow');
//
//// next element
//  var nextEl = item3.next();
//  nextEl.css('background', 'pink');
//// previous element
//  var prevEl = item3.prev();
//  prevEl.css('background', 'lightblue');
//// parent element
//  var parentEl = item3.parent();
//  parentEl.css('border', '1px solid black');
//// children elements
//  var childrenEl = item3.children();
//  childrenEl.css('color', 'red');


// Emular un selector de jQuery
//var $ = function(selector){
//  return document.querySelector(selector)
//};
//var $$ = function(selector){
//  return document.querySelectorAll(selector);
//};

var $ = function(selector){
  if(selector.indexOf('#') == 0){
    return document.querySelector(selector);
  } else {
    return document.querySelectorAll(selector);
  }
};

var item3 = $('#item');
item3.style.background = "yellow";

//next element
  var nextEl = item3.nextElementSibling;
  nextEl.style.background = "pink";

//previous element
  var prevEl = item3.previousElementSibling;
  prevEl.style.background = "lightblue";

//parent element
  var parentEl = item3.parentNode;
  parentEl.style.border = "1px solid black";

//children element
  var childrenEl = item3.children[0];
  childrenEl.style.color = "red";