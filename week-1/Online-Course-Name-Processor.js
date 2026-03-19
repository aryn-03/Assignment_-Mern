/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/
const courses = ["javascript", "react", "node", "mongodb", "express"];

//filter()
const longCourses = courses.filter(course => course.length > 5);
console.log(longCourses);

//map()
const upperCourses = courses.map(course => course.toUpperCase());
console.log(upperCourses);

//reduce()
const courseString = upperCourses.reduce(
    (result, course) => result + " | " + course
);
console.log(courseString);

//find()
const foundReact = courses.find(course => course === "react");
console.log(foundReact);

//findIndex()
const nodeIndex = courses.findIndex(course => course === "node");
console.log(nodeIndex);
