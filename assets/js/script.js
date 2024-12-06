document.addEventListener("DOMContentLoaded", () => {

  // Loads default bpm
  let bpm = 100;
  const bpmCount = document.getElementById('bpm-count')
  bpmCount.innerHTML = bpm;

  // loads audio file.
  const click = new Audio('assets/sounds/250552__druminfected__metronome.wav');

  // Stores interval ID
  let metronomeInterval = null;


  // function to decrease bpm by one.
  function decreaseBPM() {
    bpm -= 1;
    bpmCount.innerHTML = bpm;
    if (metronomeInterval !== null) {
      playMetronome();
      playMetronome();
    }
  }

  // function to increase bpm by one.
  function increaseBPM() {
    bpm += 1;
    bpmCount.innerHTML = bpm;
    if (metronomeInterval !== null) {
      playMetronome();
      playMetronome();
    }
  }

  // Function to start and stop metronome
  function playMetronome() {
    if (metronomeInterval === null) {
      metronomeInterval = setInterval(function() {
        click.play();
        document.getElementById('st-button').innerHTML = '<i class="fa-solid fa-stop"></i>';
      }, 1000);
    } else {
      clearInterval(metronomeInterval);
      metronomeInterval = null;
      document.getElementById('st-button').innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  }

  // Event Listeners
  // Decrease Tempo
  const slowButton = document.getElementById('slow-button');
  slowButton.addEventListener('click', decreaseBPM);
  // increase Tempo
  const fastButton = document.getElementById('fast-button');
  fastButton.addEventListener('click', increaseBPM);
  // play/pause button
  const startButton = document.getElementById('st-button');
  startButton.addEventListener('click', playMetronome); 
});
