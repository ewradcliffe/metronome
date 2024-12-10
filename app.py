from flask import Flask, render_template, request

app = Flask(__name__)

# Route for the homepage
@app.route('/')
def index():
    tempo = 100
    return render_template('index.html', tempo=tempo)


@app.route('/start-metronome', methods=['GET'])
def start_metronome_route():
    return "Metronome started!"

if __name__ == '__main__':
    app.run(debug=True)