function displayWeather(data){

    document.getElementById("cityName").textContent =
        `${data.name}, ${data.sys.country}`;

    document.getElementById("temperature").textContent =
        `${Math.round(data.main.temp)}°C`;

    document.getElementById("description").textContent =
        data.weather[0].description;

    document.getElementById("humidity").textContent =
        `${data.main.humidity}%`;

    document.getElementById("wind").textContent =
        `${data.wind.speed} km/h`;

    document.getElementById("pressure").textContent =
        `${data.main.pressure} hPa`;

    document.getElementById("feelsLike").textContent =
        `${Math.round(data.main.feels_like)}°C`;

    document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}