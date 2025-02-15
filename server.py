

from flask import Flask, request, jsonify, send_file
import google.generativeai as genai
import speech_recognition as sr
from gtts import gTTS
import os
import pygame
from flask import render_template

app = Flask(__name__, template_folder="templates")

@app.route("/")
def home():
    return render_template("chatbot.html")  # Ensure "index.html" is inside the "templates" folder

if __name__ == "__main__":
    app.run(debug=True)

app = Flask(__name__)

# 🔹 Configure Gemini API Key (Replace with your actual API Key)
genai.configure(api_key="AIzaSyCLwInnzh0txC_xRmlESL1Ky1uv0WSNpyY")
model = genai.GenerativeModel("gemini-pro")

# 🔹 Initialize Speech Recognizer
recognizer = sr.Recognizer()

def get_gemini_response(user_text):
    """Send user input to Gemini AI and get a response."""
    if not user_text:
        return "I didn't catch that. Please try again."

    try:
        response = model.generate_content(user_text)
        return response.text if response and hasattr(response, 'text') else "🤖 AI did not return a response."
    except Exception as e:
        return f"⚠️ Error getting AI response: {str(e)}"

def text_to_speech(response_text):
    """Convert text to speech and save it as an audio file."""
    tts = gTTS(response_text, lang="en")
    tts.save("response.mp3")
    return "response.mp3"

@app.route("/chat", methods=["POST"])
def chat():
    """Handle chatbot conversation."""
    data = request.json
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"response": "Please say something.", "audio": ""})

    response = get_gemini_response(user_message)
    audio_file = text_to_speech(response)

    return jsonify({"response": response, "audio": f"/audio/{audio_file}"})

@app.route("/audio/<filename>")
def serve_audio(filename):
    """Serve the generated audio response."""
    return send_file(filename, mimetype="audio/mpeg")

if __name__ == "__main__":
    print("🚀 Chatbot Server is Running...")
    app.run(debug=True)
