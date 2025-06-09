from flask import Flask, request, jsonify
import joblib
import numpy as np
import xgboost as xgb
from flask_cors import CORS  # Allows frontend to call backend

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Load the trained model and scaler
model = joblib.load(r"C:\Users\ranja\solar_power_xgboost_model.pkl")
scaler = joblib.load(r"C:\Users\ranja\scaler.pkl")  # Ensure this is correctly saved/loaded

@app.route("/", methods=["GET"])
def home():
    return "Welcome to the Solar Power Prediction API!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        # Extract features including RelativeAirHumidity
        radiation = float(data['Radiation'])
        sunshine = float(data['Sunshine'])
        air_temp = float(data['AirTemperature'])
        humidity = float(data['RelativeAirHumidity'])  # NEW FEATURE

        # Prepare input (now 4 features)
        input_data = np.array([[radiation, sunshine, air_temp, humidity]])  # Updated to 4 features
        input_scaled = scaler.transform(input_data)

        # Predict using XGBoost model
        prediction = model.predict(input_scaled)
        return jsonify({"prediction": float(prediction[0])})  # Ensure float for JSON serialization
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
