from flask import Flask, render_template, request, Response
import time

app = Flask(__name__)

# Route for the homepage
@app.route('/')
def index():
    tempo = 100
    return render_template('index.html', tempo=tempo)


@app.route('/start-metronome', methods=['GET'])
def start_metronome_route():
    def generate_metronome_events():
        # Send an initial message immediately
        yield f"data: Initial tick {time.time()}\n\n"
        
        # Continue sending messages every 0.3 seconds
        while True:
            time.sleep(0.001)
            yield f"data: Tick {time.time()}\n\n"

    return Response(generate_metronome_events(), content_type='text/event-stream')


if __name__ == '__main__':
    app.run(debug=True)