window.onload = function() {
  const bpmCount = parseInt(document.getElementById('bpm-count').getAttribute('data-bpm'));
  document.getElementById('bpm-count').textContent = bpmCount;
};

// Starts metronome.
function startMetronome() {
  fetch('/start-metronome')
      .then(response => response.text())
      .then(data => {
          console.log(data);
        
      })
      .catch(error => {
          console.error('Error:', error);
      });
}
