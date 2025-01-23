// const playButton = document.getElementById('playButton');
// const videoMe = document.getElementById('videoMe');

// playButton.addEventListener('click', function () {
//   playButton.classList.add('hidden');
//   videoMe.play();
//   videoMe.setAttribute("controls", "controls");
// });

document.addEventListener('DOMContentLoaded', function () {
  var logoDiv = document.getElementById('logoDiv');
  var getInTouchDiv = document.getElementById('getInTouchDiv');

  // Obtén el ancho de getInTouchDiv
  var getInTouchDivWidth = getInTouchDiv.offsetWidth;

  // Asigna ese ancho a logoDiv
  logoDiv.style.width = getInTouchDivWidth + 'px';
});