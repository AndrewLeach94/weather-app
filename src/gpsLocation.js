//this API is fetched on load to get the user's local conditions
import getCurrentWeather from "./weather-data"
import { convertToMetric, removeLoadingAnimation } from "./interface";


const fetchLocation = async (longitude, lattitude, measurement) => {
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&units=${measurement}&appid=62559260c941ebf6fd752e2570f6c760`, {mode: 'cors'});
        const weatherData = await response.json();
                
        //receives the data
        const city =  weatherData.name;

        getCurrentWeather(city, measurement);
        //remove the loading animation after weather data is retreived
        removeLoadingAnimation();
    }

    catch(err) {
        console.log("could not load local conditions");
        console.error(err);
        // default to New Orleans weather if local weather can't be found 
        getCurrentWeather("New Orleans", "imperial");
        removeLoadingAnimation();
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

    
    fetchLocation(lon, lat, getPreferredMeasurement());
    
}
const errorCallback = (error) => {
    console.error(error);
    // default to New Orleans weather if local weather can't be found 
    getCurrentWeather("New Orleans", "imperial");
    removeLoadingAnimation();
}

export const getLocalWeather = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);