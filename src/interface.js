import getCurrentWeather from "./weather-data";

const submitLocation = document.querySelector("#submit_location");
const inputLocation = document.querySelector("#input_location");
const display = document.querySelector("main");

const imperialSelector = document.querySelector("#imperial");
const metricSelector = document.querySelector("#metric");


const updateLocation = () => {
    const newLocation = inputLocation.value;

    //update the data request using the user's input as the city while keeping the existing measurement
    const getMeasurement = () => {
        if (imperialSelector.className == "button_measurement-selected") {
            return "imperial";
        }
            else {
                return "metric";
            }
        };

    getCurrentWeather(newLocation, getMeasurement());
};

const convertToMetric = () => {
    // take the current location and re-run the API call requesting metric units
    const currentLocation = document.querySelector("#current-city").textContent;
    getCurrentWeather(currentLocation, "metric");

    //remove the event listener to prevent double clicking
    metricSelector.removeEventListener("click", convertToMetric);

    //apply event listener to opposite measurement
    imperialSelector.addEventListener("click", convertToImperial);

    //change the button stylings
    imperialSelector.className = "button_measurement";
    metricSelector.className = "button_measurement-selected";
    
};

const convertToImperial = () => {
    // take the current location and re-run the API call requesting metric units
    const currentLocation = document.querySelector("#current-city").textContent;
    getCurrentWeather(currentLocation, "imperial");

    //remove the event listener to prevent double clicking
    imperialSelector.removeEventListener("click", convertToImperial);

    //apply event listener to opposite measurement
    metricSelector.addEventListener("click", convertToMetric);

    //change the button stylings
    imperialSelector.className = "button_measurement-selected";
    metricSelector.className = "button_measurement";
};



const applyEventListeners = () => {
    submitLocation.addEventListener("click", updateLocation);
    metricSelector.addEventListener("click", convertToMetric);
};


const applySunnyBackground = () => {
    display.style.background = 'var(--background_sunny)';
};

const applyCloudyBackground = () => {
    display.style.background = 'var(--background_cloudy)';
};

const applyRainyBackground = () => {
    display.style.background = 'var(--background_rainy)';
};

const applySnowyBackground = () => {
    display.style.background = 'var(--background_snowy)';
};


export { applyEventListeners, applyCloudyBackground, applySunnyBackground, applyRainyBackground, applySnowyBackground };

