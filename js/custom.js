// const playButton = document.getElementById('playButton');
// const videoMe = document.getElementById('videoMe');

// playButton.addEventListener('click', function () {
//   playButton.classList.add('hidden');
//   videoMe.play();
//   videoMe.setAttribute("controls", "controls");
// });


function empezar() {
  var getInTouchDiv = document.getElementById('getInTouchDiv');
  var logoDiv = document.getElementById('logoDiv');

  // Obtén el ancho de getInTouchDiv
  var logoDivWidth = logoDiv.offsetWidth;

  // // Asigna ese ancho a logoDiv
  // getInTouchDiv.style.width = logoDivWidth + 'px';

  resizeNavbar();
}

//resize NAVBAR function

function resizeNavbar() {
  var nav = document.getElementById('nav');
  var navUl = document.getElementById('navUl');
  var getInTouchDiv = document.getElementById('getInTouchDiv');
  var mobileMenu = document.getElementById('mobileMenu');
  var textLogo = document.getElementById('textLogo');

  var screenWidth = window.innerWidth;
  // textLogo.innerHTML = screenWidth;

  if (screenWidth < 640) {
    // textLogo.classList.add('text-red-500');
    // nav.classList.remove('justify-between')
    // nav.classList.add('justify-between')
    navUl.classList.remove('flex');
    navUl.classList.add('hidden');
    // textLogo.innerHTML = 'Frann - Web Developer';
    getInTouchDiv.classList.add('hidden');
    mobileMenu.classList.remove('hidden');
  } else {
    // textLogo.innerHTML = 'Frann';
    // textLogo.classList.remove('text-red-500');
    navUl.classList.remove('hidden');
    navUl.classList.add('flex');
    getInTouchDiv.classList.remove('hidden');
    mobileMenu.classList.add('hidden');

  }

  var getInTouchDiv = document.getElementById('getInTouchDiv');
  var logoDiv = document.getElementById('logoDiv');

  // Obtén el ancho de getInTouchDiv
  var logoDivWidth = logoDiv.offsetWidth;

  // // Asigna ese ancho a logoDiv
  getInTouchDiv.style.width = logoDivWidth + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobileMenu');
  const mobileMenuContent = document.getElementById('mobileMenuContent');
  const overlay = document.getElementById('overlay');

  mobileMenuButton.addEventListener('click', function () {
    if (mobileMenuContent.classList.contains('active')) {
      mobileMenuContent.classList.remove('active');
      overlay.classList.remove('active');
      return;
    } else {
      mobileMenuContent.classList.add('active');
      overlay.classList.add('active');
    }
  });

});

//salir del overlay

function salirOverlay() {
  var overlay = document.getElementById('overlay');
  var mobileMenuContent = document.getElementById('mobileMenuContent');
  overlay.classList.remove('active');
  mobileMenuContent.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', empezar);
window.addEventListener('resize', resizeNavbar);







