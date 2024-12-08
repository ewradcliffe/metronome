from flask import Flask, render_template, request

app = Flask(__name__)

# Route for the homepage
@app.route('/')
def index():
    tempo = 100  # This is the value you want to load
    return render_template('index.html', tempo=tempo)


if __name__ == '__main__':
    app.run(debug=True)