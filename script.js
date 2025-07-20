const apikey = "b624616582e9dc2734fb4c962da95ba7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // ✅ fixed "unit" → "units"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main =="Cloud"){
    weatherIcon.src = "image/cloud.png";
  }
  if(data.weather[0].main =="Clear"){
    weatherIcon.src = "image/clear.png";
  }
  if(data.weather[0].main =="Rain"){
    weatherIcon.src = "image/rain.png";
  }
  if(data.weather[0].main =="Mist"){
    weatherIcon.src = "image/mist.png";
  }



  document.querySelector(".weather").computedStyleMap.display = "block"
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});