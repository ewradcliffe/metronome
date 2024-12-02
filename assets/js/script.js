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

  // Event Listeners
  // Decrease Tempo
  const slowButton = document.getElementById('slow-button');
  slowButton.addEventListener('click', decreaseBPM);
});
