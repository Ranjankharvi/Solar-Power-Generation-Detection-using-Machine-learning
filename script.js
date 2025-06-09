async function predictPower() {
    // Get input values
    let radiation = document.getElementById("radiation").value;
    let sunshine = document.getElementById("sunshine").value;
    let airTemp = document.getElementById("airTemp").value;
    let humidity = document.getElementById("humidity").value;
    let resultElement = document.getElementById("result");
    let errorElement = document.getElementById("error");
    let loadingElement = document.getElementById("loading");

    // Clear previous results
    resultElement.innerHTML = "";
    errorElement.innerHTML = "";
    loadingElement.classList.remove("hidden");

    // API Request
    try {
        let response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "Radiation": parseFloat(radiation),
                "Sunshine": parseFloat(sunshine),
                "AirTemperature": parseFloat(airTemp),
                "RelativeAirHumidity": parseFloat(humidity)
            })
        });

        let data = await response.json();
        loadingElement.classList.add("hidden");

        if (response.ok) {
            resultElement.innerHTML = `⚡ Predicted Power Output: <strong>${data.prediction.toFixed(2)} kW</strong>`;
        } else {
            errorElement.innerHTML = `❌ Error: ${data.error}`;
        }
    } catch (error) {
        loadingElement.classList.add("hidden");
        errorElement.innerHTML = "❌ Failed to connect to the server.";
    }
}
