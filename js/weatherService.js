async function getWeather(city) {

    const url =
        `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`;

    console.log("Request URL:", url);

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    if (data.cod != 200) {
        throw new Error(data.message);
    }

    return data;
}