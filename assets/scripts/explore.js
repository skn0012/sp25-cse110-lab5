// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Create object for SpeechSynthesis
  const synth = window.speechSynthesis;

  // Create variables for the text, options, button, and image
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button'); 
  const faceImg = document.querySelector('img');

  // Array for the different voices
  let voices = [];

  // Function to populate the voice list
  function populateVoiceList() {
    voices = synth.getVoices();
  
    // Clear existing options except the first one
    voiceSelect.options.length = 1;

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  // On voices changed (some browsers load voices asynchronously)
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Initially populate voice list
  populateVoiceList();

  // Handle "Press to Talk" button click
  talkButton.addEventListener('click', () => {
    const text = textInput.value;
    const selectedIndex = voiceSelect.value;

  if (text.trim() !== '' && selectedIndex !== 'select') {
      const speak = new SpeechSynthesisUtterance(text);
      speak.voice = voices[selectedIndex];

      // Swap face when speaking starts
      speak.addEventListener('start', () => {
        faceImg.src = 'assets/images/smiling-open.png';
      });

      // Change face back when finished speaking
      speak.addEventListener('end', () => {
        faceImg.src = 'assets/images/smiling.png';
      });

      synth.speak(speak);
    }
  });
}