document.addEventListener("DOMContentLoaded", () => {

  // Loads default bpm
  let bpm = 100;
  let bpmCount = document.getElementById('bpm-count')
  bpmCount.innerHTML = bpm;
  

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

  // function to play metronome
  function playMetronome() {
    setInterval(function() {
      const click = new Audio('assets/sounds/250552__druminfected__metronome.wav');
      click.play();
    }, Math.round(60000/bpm));
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
