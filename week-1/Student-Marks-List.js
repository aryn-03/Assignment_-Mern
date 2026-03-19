/*
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/
const marks = [78, 92, 35, 88, 40, 67];

//filter()
const passedMarks = marks.filter(mark => mark >= 40);
console.log(passedMarks);

//map()
const graceMarks = marks.map(mark => mark + 5);
console.log(graceMarks);

//reduce()
const highestMark = marks.reduce(
    (max, mark) => mark > max ? mark : max
);
console.log(highestMark);

//find()
const firstFail = marks.find(mark => mark < 40);
console.log(firstFail);

//findIndex()
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log(indexOf92);
