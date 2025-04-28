// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Create variables for buttons, images, and audio
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  
  // Change the image and audio based on horn selection
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
  
    if (horn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      audioElement.src = 'assets/audio/air-horn.mp3';
    } else if (horn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      audioElement.src = 'assets/audio/car-horn.mp3';
    } else if (horn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      audioElement.src = 'assets/audio/party-horn.mp3';
    }
  });

  // Change volume based on slider
  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    
    // Change volume icon based on where slider is at
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume >= 1 && volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume >= 33 && volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    
    // Volume out of 100
    audioElement.volume = volume / 100;
  });

  // Create a confetti object
  const jsConfetti = new JSConfetti();

  playButton.addEventListener('click', () => {
    audioElement.play();
  
    // Play confetti animation if party horn is played
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}