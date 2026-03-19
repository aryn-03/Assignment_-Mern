/*
Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
const temperatures = [32, 35, 28, 40, 38, 30, 42];
//filter()
const above35 = temperatures.filter(temp => temp > 35);
console.log("Above 35°C:", above35);

//map()
const fahrenheitTemps = temperatures.map(
    temp => (temp * 9 / 5) + 32
);
console.log("In Fahrenheit:", fahrenheitTemps);

//reduce()
const averageTemp =
    temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average Temperature (°C):", averageTemp);

//find()
const firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First temperature above 40°C:", firstAbove40);

//findIndex()
const indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of 28°C:", indexOf28);