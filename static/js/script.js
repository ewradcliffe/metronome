window.onload = function() {
  const bpmCount = parseInt(document.getElementById('bpm-count').getAttribute('data-bpm'));
  document.getElementById('bpm-count').textContent = bpmCount;
};

// Starts metronome.
const startMetronome = () => {
  fetch('/start-metronome', {
      method: 'POST',
  })
  .catch(error => console.error('Error:', error));
};
