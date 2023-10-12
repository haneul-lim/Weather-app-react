// 발급 받은 api key 작성
const API_KEY = "dladmldmlapikey1234";

export function fetchWeathers(city) {
  console.log("city ==> ", city);
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  ).then(response => response.json());
}
