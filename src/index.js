
const getCurrentWeather = async (requestedLocation) => {
    try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=new%20orleans&units=metric&appid=62559260c941ebf6fd752e2570f6c760', {mode: 'cors'});
        const weatherData = await response.json();

        
        //receives the data
        const city =  weatherData.name;
        const temp =  weatherData.main.temp;
        const highTemp =  weatherData.main.temp_max;
        const lowTemp =  weatherData.main.temp_min;
        const feelsLike =  weatherData.main.feels_like;
        const humidity =  weatherData.main.humidity;
        const weatherType =  weatherData.weather[0].main;
        const weatherDescription =  weatherData.weather[0].description;


        return {city, temp, highTemp, lowTemp, feelsLike, humidity, weatherType, weatherDescription};

    } catch(err) {
        console.log(err);
    } 

};

const postToScreen = async () => {
    try { 
        const weather = await getCurrentWeather();

    console.log(weather.city);
    }
    catch (error) {
        console.log("Something went wrong");
    }
};

postToScreen();


