/*
ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions

*/
// Import validator functions
import {
  validateTitle,
  validatePriority,
  validateDueDate
} from "./validator.js";

const tasks = [];
let taskIdCounter = 1;

// 1. Add new task
function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) {
    return "Error: Title must be at least 3 characters";
  }

  if (!validatePriority(priority)) {
    return "Error: Priority must be low, medium, or high";
  }

  if (!validateDueDate(dueDate)) {
    return "Error: Due date must be a future date";
  }

  const task = {
    id: taskIdCounter,
    title: title,
    priority: priority,
    dueDate: dueDate,
    completed: false
  };

  tasks.push(task);
  taskIdCounter++;

  return "Task added successfully";
}

// 2. Get all tasks
function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      tasks[i].completed = true;
      return "Task marked as completed";
    }
  }
  return "Task not found";
}

// Export functions
export {
  addTask,
  getAllTasks,
  completeTask
};
