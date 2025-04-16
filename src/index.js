import "./styles.css";

const processWeatherData = (data) => {
  if (!data || !data.address || !data.days || data.days.length === 0) {
    return { error: "Invalid weather data" };
  }

  const current = data.days[0]; // Today's weather
  return {
    city: data.address,
    date: current.datetime,
    temperature: {
      min: current.tempmin,
      max: current.tempmax,
      current: current.temp,
    },
    conditions: current.conditions,
    description: current.description,
    humidity: current.humidity,
    windSpeed: current.windspeed,
    sunrise: current.sunrise,
    sunset: current.sunset,
    icon: current.icon,
  };
};

const getWeather = async (city) => {
  const apiKey = `LAHQZ93VXZQDHXHHAZEJ8E6KU`;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const processed = processWeatherData(data);
    console.log(processed);
    return processed
  } catch (err) {
    console.error("Error fetching weather data:", err);
    return { error: "Failed to fetch weather data" };
  }
};

document.getElementById("locationForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  const city = document.getElementById("cityInput").value.trim();
  if (city) {
    getWeather(city);
  }
});
