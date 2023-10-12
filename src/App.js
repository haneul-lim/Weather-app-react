import { useQuery, useQueryClient } from "react-query";
import NotFound from "./components/NotFound";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";
import WeatherDetails from "./components/WeatherDetail";
import { fetchWeathers } from "./api/weather";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cityState, weatherState } from "./atoms/weather";
import { useEffect, useState } from "react";

function App() {
  const city = useRecoilValue(cityState);
  const setWeather = useSetRecoilState(weatherState);

  const [isNotFound, setIsFound] = useState(false);
  const { data, refetch } = useQuery(["weather"], () => fetchWeathers(city), {
    onSuccess: data => {
      if (data.cod === "404") {
        setIsFound(true);
        return;
      }
      setIsFound(false);
      setWeather(data);
    },
    refetchOnWindowFocus: false,
    enabled: Boolean(city),
  });

  useEffect(() => {
    if (city) {
      refetch();
    }
  }, [city]);

  // #. !data "105px"
  // #. data > 404 : 400px;
  // #. data > !404 : 590px;
  const containerStyle = {
    height: !data ? "105px" : isNotFound ? "400px" : "590px",
  };

  return (
    <div className="container" style={containerStyle}>
      <SearchBox />
      <NotFound isNotFound={isNotFound} />
      <WeatherBox />
      <WeatherDetails />
    </div>
  );
}

export default App;
