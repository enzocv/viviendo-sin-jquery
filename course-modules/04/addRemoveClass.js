//$('#toggle-menu').click(function(){
//  $('#menu').toggleClass('mostrar');
//});

var toggleMenu = document.getElementById('toggle-menu'),
    menu = document.getElementById('menu');

// classList es una propiedad de los elementos que devuelve un
// DOMTokenList con todas las clases. Este propiedad posee los
// siguientes métodos: add(), remove(), toggle()



toggleMenu.addEventListener('click',function(){
  menu.classList.toggle('mostrar');
});


// Correspondencias:

// Añadir clases:
  // jQuery:         $(el).addClass('myclass')
  // JavaScript:     el.classList.add('myclass')

// Quitar clases:
  // jQuery:         $(el).removeClass('myclass')
  // JavaScript:     el.classList.remove('myclass')

// Toggle class
  // jQuery:         $(el).toggleClass('myclass')
  // JavaScript:     el.classList.toggle('myclass')