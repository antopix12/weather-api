import "./styles.css";

const getWeather = async (city) => {
  const apiKey = `LAHQZ93VXZQDHXHHAZEJ8E6KU`;
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`);
  const data = await response.json();
  console.log(data);
};

// Call the function to test
getWeather("Seattle");

