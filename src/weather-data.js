
const getCurrentWeather = async (requestedLocation) => {
    try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=new%20orleans&units=imperial&appid=62559260c941ebf6fd752e2570f6c760', {mode: 'cors'});
        const weatherData = await response.json();

        
        //receives the data
        const city =  weatherData.name;
        const temp =  weatherData.main.temp;
        const highTemp =  weatherData.main.temp_max;
        const lowTemp =  weatherData.main.temp_min;
        const feelsLike =  weatherData.main.feels_like;
        const humidity =  weatherData.main.humidity;
        const weatherType =  weatherData.weather[0].main;
        const windSpeed =  weatherData.wind.speed;

        return { city, temp, highTemp, lowTemp, feelsLike, humidity, weatherType, windSpeed };

    } catch(err) {
        console.error("Something went wrong");
    } 

};

 const displayCurrentWeather = async () => {
    try { 
        const weatherData = await getCurrentWeather();

        const displayTemperature = (temperature) => {
            //temperature needs to be rounded to closest whole number
            const roundTemperature = (() => Math.round(temperature))();

            //append the rounded temperature to page
            const display = document.querySelector("#current-temperature");
            display.textContent = roundTemperature + "°";

        };

        const displayCity = (city) => {
            const display = document.querySelector("#current-city");
            display.textContent = city;
        };

        const displayType = (type) => {
            const display = document.querySelector("#current-conditions");
            display.textContent = type;
        };

        const displayHumidity = (humidity) => {
            const display = document.querySelector("#current-humidity");
            display.textContent = `Humidity:  ${humidity}%`;
        };

        const displayFeelsLike = (feel) => {
            //temperature needs to be rounded to closest whole number
            const roundTemperature = (() => Math.round(feel))();

            const display = document.querySelector("#current-feel");
            display.textContent = `Feels Like: ${roundTemperature}°`;
        };

        const displayWind = (wind) => {
            //temperature needs to be rounded to closest whole number
            const roundSpeed= (() => Math.round(wind))();

            const display = document.querySelector("#current-wind");
            display.textContent = `Wind: ${roundSpeed} mph`;
        };




        
        
        
        displayTemperature(weatherData.temp);
        displayCity(weatherData.city);
        displayType(weatherData.weatherType);
        displayHumidity(weatherData.humidity);
        displayFeelsLike(weatherData.feelsLike);
        displayWind(weatherData.windSpeed);


    }
    catch (error) {
        console.error("Current weather couldn't be loaded");
    }
};

export default displayCurrentWeather;



