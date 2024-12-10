window.onload = function() {
  const bpmCount = parseInt(document.getElementById('bpm-count').getAttribute('data-bpm'));
  document.getElementById('bpm-count').textContent = bpmCount;
};

const lowBeat = new Audio('static/sounds/250552__druminfected__metronome.wav');

// Starts metronome.
function startMetronome() {
  fetch('/start-metronome')
      .then(response => response.text())
      .then(data => {
          console.log(data);
          lowBeat.play();
      })
      .catch(error => {
          console.error('Error:', error);
      });
}
