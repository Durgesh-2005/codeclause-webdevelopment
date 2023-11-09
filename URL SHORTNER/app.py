from flask import Flask, render_template, request, jsonify
import pyshorteners

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/shorten", methods=["POST"])
def shorten_url():
    data = request.get_json()
    original_url = data["originalUrl"]

    s = pyshorteners.Shortener()
    short_url = s.tinyurl.short(original_url)

    return jsonify({"shortUrl": short_url})

if __name__ == "__main__":
    app.run(debug=True)
