window.onload = function() {
  const bpmCount = parseInt(document.getElementById('bpm-count').getAttribute('data-bpm'));
  document.getElementById('bpm-count').textContent = bpmCount;
};

const lowBeat = new Audio('static/sounds/250552__druminfected__metronome.wav');

// Starts metronome.
function startMetronome() {
  const eventSource = new EventSource('/start-metronome');

  // Play the metronome sound for every "tick" message received from the server
  eventSource.onmessage = function(event) {
      console.log("Message from server:", event.data);
      lowBeat.play();
  };

  eventSource.onerror = function(event) {
      console.error("Error with SSE:", event);
      eventSource.close();
  };
}