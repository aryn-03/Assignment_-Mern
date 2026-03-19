/*
iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
*/

// Import task functions
import {
  addTask,
  getAllTasks,
  completeTask
} from "./task.js";

// 1. Add some tasks
console.log(addTask("Learn MERN Stack", "high", "2026-02-10"));
console.log(addTask("Practice DSA", "medium", "2026-02-05"));
console.log(addTask("Make projects", "low", "2026-02-03"));

// 2. Display all tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log("\nCompleting Task with ID 1:");
console.log(completeTask(1));

// 4. Display all tasks again
console.log("\nAll Tasks:");
console.log(getAllTasks());
