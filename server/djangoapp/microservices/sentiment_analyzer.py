from flask import Flask, jsonify
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = Flask(__name__)
analyzer = SentimentIntensityAnalyzer()


@app.route("/")
def home():
    return jsonify({"status": "running"})


@app.route("/analyze/<path:text>")
def analyze(text):
    score = analyzer.polarity_scores(text)
    compound = score["compound"]

    if compound >= 0.05:
        sentiment = "positive"
    elif compound <= -0.05:
        sentiment = "negative"
    else:
        sentiment = "neutral"

    return jsonify({"sentiment": sentiment})
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
