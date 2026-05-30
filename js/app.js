const cityInput =
    document.getElementById("cityInput");

const searchBtn =
    document.getElementById("searchBtn");

const loader =
    document.getElementById("loader");

async function loadWeather(city){

    try{

        loader.classList.remove("hidden");

        const weather =
            await getWeather(city);

        displayWeather(weather);

        saveLastCity(city);

    }
    catch(error){

        alert(error.message);

    }
    finally{

        loader.classList.add("hidden");

    }

}

searchBtn.addEventListener("click", () => {

    const city =
        cityInput.value.trim();

    if(city){
        loadWeather(city);
    }

});

cityInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        const city =
            cityInput.value.trim();

        if(city){
            loadWeather(city);
        }

    }

});

window.addEventListener("load", () => {

    const city =
        getLastCity() ||
        WEATHER_CONFIG.defaultCity;

    loadWeather(city);

});