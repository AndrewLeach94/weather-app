//this API is fetched on load to get the user's local conditions
import getCurrentWeather from "./weather-data"
import { convertToMetric, applyCloudyBackground, applySunnyBackground, applyRainyBackground, applySnowyBackground } from "./interface";


const fetchLocalWeather = async (longitude, lattitude, measurement) => {
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&units=${measurement}&appid=62559260c941ebf6fd752e2570f6c760`, {mode: 'cors'});
        const weatherData = await response.json();
        
        //check if user's city is valid - display error if not
        if (weatherData.message == 'city not found') {
            displayUserError();
        }
        
        //receives the data
        const city =  weatherData.name;
        const temp =  weatherData.main.temp;
        const feelsLike =  weatherData.main.feels_like;
        const humidity =  weatherData.main.humidity;
        const weatherType =  weatherData.weather[0].main;
        const windSpeed =  weatherData.wind.speed;

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
            //UI needs to update based on measurement
            if (measurement == "imperial") {
                display.textContent = `Wind: ${roundSpeed} mph`;
            }

            else {
                display.textContent = `Wind: ${roundSpeed} kph`;
            }
        };

        const updateUI = (() => {
            displayTemperature(temp);
            displayCity(city);
            displayType(weatherType);
            displayHumidity(humidity);
            displayFeelsLike(feelsLike);
            displayWind(windSpeed);
            
            // apply the appropiate background
            if (weatherType == "Clouds") {
                applyCloudyBackground();
            }

            else if (weatherType == "Mist") {
                applyRainyBackground();
            }
            
            else if (weatherType == "Rain") {
                applyRainyBackground();
            }

            else if (weatherType == "Snow") {
                applySnowyBackground();
            }

            else {
                applySunnyBackground();
            }

        })();

    }

    catch(err) {
        console.log("could not load local conditions");
        console.error(err);
        // default to New Orleans weather if local weather can't be found 
        getCurrentWeather("New Orleans", "imperial");
    }
}




const successCallback = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    // find the user's preferred units with their system language
    const getPreferredMeasurement = () => {
        let preferredMeasurement;
        if (navigator.language === "en-US") {
             preferredMeasurement = "imperial";
        } else {
            preferredMeasurement = "metric";
            // convert the UI to metric
            convertToMetric(); 
        }
        return preferredMeasurement;
    }

    
    fetchLocalWeather(lon, lat, getPreferredMeasurement());
    
}
const errorCallback = (error) => {
    console.error(error);
    // default to New Orleans weather if local weather can't be found 
    getCurrentWeather("New Orleans", "imperial");
}

export const getLocalWeather = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);