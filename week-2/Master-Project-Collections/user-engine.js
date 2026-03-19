// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// Get all active users
export function getActiveUsers() {
  let activeUsers = users.filter((user) => user.active === true);
  return activeUsers;
}

// Get names of all active users
export function getActiveUserNames() {
  let activeUsers = getActiveUsers();

  let activeUserNames = [];
  for (let user of activeUsers) {
    activeUserNames.push(user.name);
  }

  return activeUserNames;
}

// Check if any admin user exists
export function isAdminExist() {
  let exist = false;

  for (let user of users) {
    if (user.role === "admin") {
      exist = true;
      return exist;
    }
  }

  return exist;
}

// Find a user by ID
export function findUserById(id) {
  let user = users.find((user) => user.id === id);
  return user;
}


// Deactivate a user immutably
export function deactivateUser(id) {
  let clonedUser = structuredClone(users);

  let usersAfter = clonedUser.map((user) => {
    if (user.id === id) {
      user.active = false;
    }
    return user;
  });

  return usersAfter;
}
