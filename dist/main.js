/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ \"./src/weather-data.js\");\n/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface.js */ \"./src/interface.js\");\n\r\n\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.default)(\"New Orleans\", \"imperial\");\r\n    (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.applyEventListeners)();\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyEventListeners\": () => /* binding */ applyEventListeners,\n/* harmony export */   \"applyCloudyBackground\": () => /* binding */ applyCloudyBackground,\n/* harmony export */   \"applySunnyBackground\": () => /* binding */ applySunnyBackground,\n/* harmony export */   \"applyRainyBackground\": () => /* binding */ applyRainyBackground,\n/* harmony export */   \"applySnowyBackground\": () => /* binding */ applySnowyBackground\n/* harmony export */ });\n/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ \"./src/weather-data.js\");\n\r\n\r\nconst submitLocation = document.querySelector(\"#submit_location\");\r\nconst inputLocation = document.querySelector(\"#input_location\");\r\nconst display = document.querySelector(\"main\");\r\n\r\nconst imperialSelector = document.querySelector(\"#imperial\");\r\nconst metricSelector = document.querySelector(\"#metric\");\r\n\r\n\r\nconst updateLocation = () => {\r\n    const newLocation = inputLocation.value;\r\n\r\n    //update the data request using the user's input as the city while keeping the existing measurement\r\n    const getMeasurement = () => {\r\n        if (imperialSelector.className == \"button_measurement-selected\") {\r\n            return \"imperial\";\r\n        }\r\n            else {\r\n                return \"metric\";\r\n            }\r\n        };\r\n\r\n    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.default)(newLocation, getMeasurement());\r\n};\r\n\r\nconst convertToMetric = () => {\r\n    // take the current location and re-run the API call requesting metric units\r\n    const currentLocation = document.querySelector(\"#current-city\").textContent;\r\n    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.default)(currentLocation, \"metric\");\r\n\r\n    //remove the event listener to prevent double clicking\r\n    metricSelector.removeEventListener(\"click\", convertToMetric);\r\n\r\n    //apply event listener to opposite measurement\r\n    imperialSelector.addEventListener(\"click\", convertToImperial);\r\n\r\n    //change the button stylings\r\n    imperialSelector.className = \"button_measurement\";\r\n    metricSelector.className = \"button_measurement-selected\";\r\n    \r\n};\r\n\r\nconst convertToImperial = () => {\r\n    // take the current location and re-run the API call requesting metric units\r\n    const currentLocation = document.querySelector(\"#current-city\").textContent;\r\n    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__.default)(currentLocation, \"imperial\");\r\n\r\n    //remove the event listener to prevent double clicking\r\n    imperialSelector.removeEventListener(\"click\", convertToImperial);\r\n\r\n    //apply event listener to opposite measurement\r\n    metricSelector.addEventListener(\"click\", convertToMetric);\r\n\r\n    //change the button stylings\r\n    imperialSelector.className = \"button_measurement-selected\";\r\n    metricSelector.className = \"button_measurement\";\r\n};\r\n\r\n\r\n\r\nconst applyEventListeners = () => {\r\n    submitLocation.addEventListener(\"click\", updateLocation);\r\n    metricSelector.addEventListener(\"click\", convertToMetric);\r\n};\r\n\r\n\r\nconst applySunnyBackground = () => {\r\n    display.style.background = 'var(--background_sunny)';\r\n};\r\n\r\nconst applyCloudyBackground = () => {\r\n    display.style.background = 'var(--background_cloudy)';\r\n};\r\n\r\nconst applyRainyBackground = () => {\r\n    display.style.background = 'var(--background_rainy)';\r\n};\r\n\r\nconst applySnowyBackground = () => {\r\n    display.style.background = 'var(--background_snowy)';\r\n};\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/interface.js?");

/***/ }),

/***/ "./src/weather-data.js":
/*!*****************************!*
  !*** ./src/weather-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n\r\n\r\nconst displayUserError = () => {\r\n    // create the error message\r\n    const locationContainer = document.querySelector(\"#location-container\");\r\n    const message = document.createElement(\"p\");\r\n    message.textContent = \"Couldn't find this city. Please check your spelling\";\r\n    message.id = \"error_city\";\r\n    locationContainer.appendChild(message);\r\n\r\n    //remove the error after 3 seconds\r\n    setTimeout(function removeElement () {\r\n        message.remove();\r\n    }, 4000);\r\n}\r\n\r\nconst getCurrentWeather = async (requestedLocation, measurement) => {\r\n    try {        \r\n        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${requestedLocation}&units=${measurement}&appid=62559260c941ebf6fd752e2570f6c760`, {mode: 'cors'});\r\n        const weatherData = await response.json();\r\n\r\n        //check if user's city is valid - display error if not\r\n        if (weatherData.message == 'city not found') {\r\n            displayUserError();\r\n        }\r\n        \r\n        //receives the data\r\n        const city =  weatherData.name;\r\n        const temp =  weatherData.main.temp;\r\n        const feelsLike =  weatherData.main.feels_like;\r\n        const humidity =  weatherData.main.humidity;\r\n        const weatherType =  weatherData.weather[0].main;\r\n        const windSpeed =  weatherData.wind.speed;\r\n\r\n\r\n        const displayTemperature = (temperature) => {\r\n            //temperature needs to be rounded to closest whole number\r\n            const roundTemperature = (() => Math.round(temperature))();\r\n\r\n            //append the rounded temperature to page\r\n            const display = document.querySelector(\"#current-temperature\");\r\n            display.textContent = roundTemperature + \"°\";\r\n\r\n        };\r\n\r\n        const displayCity = (city) => {\r\n            const display = document.querySelector(\"#current-city\");\r\n            display.textContent = city;\r\n        };\r\n\r\n        const displayType = (type) => {\r\n            const display = document.querySelector(\"#current-conditions\");\r\n            display.textContent = type;\r\n        };\r\n\r\n        const displayHumidity = (humidity) => {\r\n            const display = document.querySelector(\"#current-humidity\");\r\n            display.textContent = `Humidity:  ${humidity}%`;\r\n        };\r\n\r\n        const displayFeelsLike = (feel) => {\r\n            //temperature needs to be rounded to closest whole number\r\n            const roundTemperature = (() => Math.round(feel))();\r\n\r\n            const display = document.querySelector(\"#current-feel\");\r\n            display.textContent = `Feels Like: ${roundTemperature}°`;\r\n        };\r\n\r\n        const displayWind = (wind) => {\r\n            //temperature needs to be rounded to closest whole number\r\n            const roundSpeed= (() => Math.round(wind))();\r\n\r\n            const display = document.querySelector(\"#current-wind\");\r\n            //UI needs to update based on measurement\r\n            if (measurement == \"imperial\") {\r\n                display.textContent = `Wind: ${roundSpeed} mph`;\r\n            }\r\n\r\n            else {\r\n                display.textContent = `Wind: ${roundSpeed} kph`;\r\n            }\r\n        };\r\n\r\n        const updateUI = (() => {\r\n            displayTemperature(temp);\r\n            displayCity(city);\r\n            displayType(weatherType);\r\n            displayHumidity(humidity);\r\n            displayFeelsLike(feelsLike);\r\n            displayWind(windSpeed);\r\n            \r\n            // apply the appropiate background\r\n            if (weatherType == \"Clouds\") {\r\n                (0,_interface__WEBPACK_IMPORTED_MODULE_0__.applyCloudyBackground)();\r\n            }\r\n\r\n            else if (weatherType == \"Mist\") {\r\n                (0,_interface__WEBPACK_IMPORTED_MODULE_0__.applyRainyBackground)();\r\n            }\r\n            \r\n            else if (weatherType == \"Rain\") {\r\n                (0,_interface__WEBPACK_IMPORTED_MODULE_0__.applyRainyBackground)();\r\n            }\r\n\r\n            else if (weatherType == \"Snow\") {\r\n                (0,_interface__WEBPACK_IMPORTED_MODULE_0__.applySnowyBackground)();\r\n            }\r\n\r\n            else {\r\n                (0,_interface__WEBPACK_IMPORTED_MODULE_0__.applySunnyBackground)();\r\n            }\r\n\r\n        })();\r\n\r\n\r\n    } catch(err) {\r\n        console.error(\"Something went wrong with the current conditions\");\r\n    } \r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentWeather);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/weather-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;