import "./styles.css";
import { greeting } from "./greeting.js";

// Access the API key that was defined in Webpack config via DefinePlugin
console.log("Weather API Key:", process.env.VISUAL_CROSSING_API_KEY);

const getWeather = async (city) => {
  const apiKey = process.env.VISUAL_CROSSING_API_KEY;
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=LAHQZ93VXZQDHXHHAZEJ8E6KU`);
  const data = await response.json();
  console.log(data);
};

// Call the function to test
getWeather("Seattle");

