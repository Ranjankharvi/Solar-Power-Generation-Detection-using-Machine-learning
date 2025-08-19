📌 Solar Power Generation Detection using Machine Learning
🌞 Overview

This project predicts solar power generation based on environmental parameters using Machine Learning (XGBoost). It provides a Flask-based web application where users can input weather data (such as radiation, sunshine, humidity, etc.) and get predictions of solar power output in real time.

The application is useful for:

Optimizing solar energy planning

Improving grid efficiency

Supporting sustainable energy management

⚙️ Features

🔮 Machine Learning Model (XGBoost) for accurate prediction

🌐 Flask Web App with user-friendly UI

📊 Dataset-driven insights from real-world solar power data

🖥️ Interactive frontend built with HTML, CSS, and JavaScript

📁 Ready-to-use trained model (.pkl file)

🗂️ Project Structure
📦 Solar-Power-Generation-Detection-using-Machine-learning
 ┣ 📜 app.py                     # Flask backend
 ┣ 📜 solar_power_xgboost_model.pkl  # Trained ML model
 ┣ 📜 Solar Power Plant Data.csv # Dataset
 ┣ 📜 index.html                 # Frontend page
 ┣ 📜 script.js                  # Frontend logic
 ┣ 📜 styles.css                 # Styling
 ┣ 📓 project (1).ipynb          # Jupyter Notebook (EDA + Model Training)
 ┣ 📜 README.md                  # Project documentation

🛠️ Technologies Used

Python

Flask (Backend framework)

XGBoost (Machine Learning model)

Pandas & Scikit-learn (Data processing)

HTML, CSS, JavaScript (Frontend)

📊 Dataset

The dataset (Solar Power Plant Data.csv) contains environmental parameters such as:

☀️ Radiation

🌤️ Sunshine

💧 Relative Humidity

🌡️ Temperature

⚡ System Production (Target Variable)



🚀 How to Run the Project
🔧 1. Clone the repository
git clone https://github.com/Ranjankharvi/Solar-Power-Generation-Detection-using-Machine-learning.git
cd Solar-Power-Generation-Detection-using-Machine-learning

📦 2. Install dependencies
pip install -r requirements.txt

pip install flask xgboost pandas scikit-learn

▶️ 3. Run the Flask app
python app.py

🌐 4. Open in browser
http://127.0.0.1:5000/

<img width="1558" height="1104" alt="Screenshot (19)" src="https://github.com/user-attachments/assets/a63b0373-6320-4db7-ab2b-1e5a0efb3de8" />

