import { useRecoilValue } from "recoil";
import { weatherState } from "../atoms/weather";

const mapImageSrc = main => {
  let imageSrc;
  switch (main) {
    case "Clear":
      imageSrc = "images/clear.png";
      break;
    case "Rain":
      imageSrc = "images/rain.png";
      break;
    case "Snow":
      imageSrc = "images/snow.png";
      break;
    case "Clouds":
      imageSrc = "images/cloud.png";
      break;
    case "Haze":
      imageSrc = "images/haze.png";
      break;
    default:
      imageSrc = "";
      break;
  }
  return imageSrc;
};

function WeatherBox() {
  const weatherData = useRecoilValue(weatherState);
  const { main = {}, weather = [] } = weatherData;

  const weatherBoxStyle = {
    display: weatherData ? "" : "none",
  };

  return (
    <div
      className={`weather-box ${weatherData && "fadeIn"}`}
      style={weatherBoxStyle}
    >
      <img src={mapImageSrc(weather[0]?.main)} alt="weather" />
      <p className="temperature">{`${main.temp}°C`}</p>
      <p className="description">{`${weather[0]?.description}`}</p>
    </div>
  );
}

export default WeatherBox;
