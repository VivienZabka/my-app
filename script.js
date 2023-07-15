const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");

const API_KEY = "f3009e4852fa0a079dab291dabf020c4"; // Replace with your OpenWeatherMap API key

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  getWeatherData(city);
});

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    if (response.ok) {
      const temperature = Math.round(data.main.temp); // Round the temperature
      const description = data.weather[0].description;

      weatherInfo.innerHTML = `<h2>${city}</h2><p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
    } else {
      weatherInfo.innerHTML = "<p>Weather data not found</p>";
    }
  } catch (error) {
    console.log(error);
    weatherInfo.innerHTML = "<p>Failed to fetch weather data</p>";
  }
}
