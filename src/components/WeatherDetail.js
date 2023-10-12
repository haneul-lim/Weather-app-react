import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { weatherState } from "../atoms/weather";

function WeatherDetails() {
  const weatherData = useRecoilValue(weatherState);
  const { main = {}, wind = {} } = weatherData;

  const weatherDetailStyle = {
    display: weatherData ? "" : "none",
  };
  return (
    <div
      className={`weather-details ${weatherData && "fadeIn"}`}
      style={weatherDetailStyle}
    >
      <div className="humidity">
        <FontAwesomeIcon icon={faWater} />
        <div className="text">
          <span>{main.humidity}%</span>
          <p>Humidity</p>
        </div>
      </div>
      <div className="wind">
        <FontAwesomeIcon icon={faWind} />
        <div className="text">
          <span>{wind.speed}Km/h</span>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
