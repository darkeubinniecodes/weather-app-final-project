function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "745a387cbd32a2ed51308fac14399b48";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Leiria&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
