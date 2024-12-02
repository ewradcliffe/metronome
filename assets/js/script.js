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

  // Event Listeners
  // Decrease Tempo
  const slowButton = document.getElementById('slow-button');
  slowButton.addEventListener('click', decreaseBPM);
  // increase Tempo
  const fastButton = document.getElementById('fast-button');
  fastButton.addEventListener('click', increaseBPM);
});
