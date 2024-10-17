const playButton = document.getElementById('playButton');
const videoMe = document.getElementById('videoMe');

playButton.addEventListener('click', function() {
    playButton.classList.add('hidden');
    videoMe.play();
    videoMe.setAttribute("controls", "controls");/*
  if (videoMe.paused) {
    

  } else {
    //videoMe.pause();
    
  }*/
});