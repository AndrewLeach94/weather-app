/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
eval("\r\nconst getCurrentWeather = async (requestedLocation) => {\r\n    try {\r\n        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=new%20orleans&units=metric&appid=62559260c941ebf6fd752e2570f6c760', {mode: 'cors'});\r\n        const weatherData = await response.json();\r\n\r\n        \r\n        //receives the data\r\n        const city =  weatherData.name;\r\n        const temp =  weatherData.main.temp;\r\n        const highTemp =  weatherData.main.temp_max;\r\n        const lowTemp =  weatherData.main.temp_min;\r\n        const feelsLike =  weatherData.main.feels_like;\r\n        const humidity =  weatherData.main.humidity;\r\n        const weatherType =  weatherData.weather[0].main;\r\n        const weatherDescription =  weatherData.weather[0].description;\r\n\r\n\r\n        return {city, temp, highTemp, lowTemp, feelsLike, humidity, weatherType, weatherDescription};\r\n\r\n    } catch(err) {\r\n        console.log(err);\r\n    } \r\n\r\n};\r\n\r\nconst postToScreen = async () => {\r\n    try { \r\n        const weather = await getCurrentWeather();\r\n\r\n    console.log(weather.city);\r\n    }\r\n    catch (error) {\r\n        console.log(\"Something went wrong\");\r\n    }\r\n};\r\n\r\npostToScreen();\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");
/******/ })()
;