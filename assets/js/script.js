document.addEventListener("DOMContentLoaded", () => {

  // Loads default bpm
  let bpm = 100;
  let bpmCount = document.getElementById('bpm-count')
  bpmCount.innerHTML = bpm;



  // Stores interval ID
  let metronomeInterval = null;
  

  // function to decrease bpm by one.
  function decreaseBPM() {
    bpm -= 1;
    bpmCount.innerHTML = bpm;
  }

  // function to increase bpm by one.
  function increaseBPM() {
    bpm += 1;
    bpmCount.innerHTML = bpm;
  }

  // Function to start and stop metronome
  function playMetronome() {
    if (metronomeInterval === null) {
      metronomeInterval = setInterval(function() {
        const click = new Audio('assets/sounds/250552__druminfected__metronome.wav');
        click.play();
        document.getElementById('st-button').innerHTML = '<i class="fa-solid fa-stop"></i>';
      }, Math.round(60000 / bpm));
    } else {
      clearInterval(metronomeInterval);
      metronomeInterval = null;
      document.getElementById('st-button').innerHTML = '<i class="fa-solid fa-play"></i>';
      startButton.insertAdjacentHTML(beforeend, html);
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
