/*
Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years
*/

let dob = "2000-05-15";

// Convert DOB to Date object
let birthDate = new Date(dob);
let today = new Date();

// Calculate age in years
let age = today.getFullYear() - birthDate.getFullYear();

console.log("Exact Age in Years:", age);
