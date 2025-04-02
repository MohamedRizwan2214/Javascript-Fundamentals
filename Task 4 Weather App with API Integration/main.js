// const dotenv = require("dotenv");

// dotenv.config();
const city = document.getElementById("city");
const apiKey =process.env.API_KEY;

async function fetchWeatherData(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    document.getElementById("cityDetails").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " m/s";
    document.getElementById("pressure").innerHTML = data.main.pressure + " pa";
    document.getElementById("weather").style.display = "block";
  } catch (error) {
    // console.error("There was a problem with the fetch operation:", error);
    document.getElementById("weather").style.display = "none";
    alert("Please enter a valid city name.");
  }
}

function getWeather() {
  const cityName = city.value;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetchWeatherData(apiURL);

  //   console.log(cityName);
}
