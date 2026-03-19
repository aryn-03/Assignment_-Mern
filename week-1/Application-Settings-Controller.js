/*
Assignment 3: Application Settings Controller
---------------------------------------------
Scenario : A web app stores user preferences as settings.

Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified
*/
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

//Toggle theme
settings.theme = (settings.theme === "light") ? "dark" : "light";

//Turn autoSave to true
settings.autoSave = true;

//Remove the notifications setting
delete settings.notifications;

//Freeze the settings object
Object.freeze(settings);

console.log("Final settings:", settings);