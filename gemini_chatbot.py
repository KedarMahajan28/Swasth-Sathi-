
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

# Configure Gemini AI
genai.configure(api_key="AIzaSyCLwInnzh0txC_xRmlESL1Ky1uv0WSNpyY")
model = genai.GenerativeModel("gemini-pro")

app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def home():
    return render_template("chatbot.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"response": "Please enter a message."})

    try:
        response = model.generate_content(user_message)
        return jsonify({"response": response.text})
    except Exception as e:
        return jsonify({"response": f"Error: {str(e)}"})

if __name__ == "__main__":
    app.run(port=5000,debug=True)
