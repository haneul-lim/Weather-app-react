import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { cityState } from "../atoms/weather";
import { useQueryClient } from "react-query";

function SearchBox() {
  const textBox = useRef(null);
  const [city, setCity] = useRecoilState(cityState);
  const searchWeather = () => {
    setCity(textBox.current.value);
  };

  return (
    <div className="search-box">
      <FontAwesomeIcon icon={faLocationDot} size="2x" />
      <input type="text" placeholder="Enter your location" ref={textBox} />
      <button onClick={searchWeather}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default SearchBox;
