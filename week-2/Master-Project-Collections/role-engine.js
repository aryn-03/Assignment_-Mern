// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// Get all role names from the roles object
export function getRoles() {
  let rolllNames = [];

  for (let role in roles) {
    rolllNames.push(role);
  }

  return rolllNames;
}

// Check whether student role has delete permission
export function checkStudent() {
  let canDelete = false;

  for (let val of roles.student) {
    if (val === "delete") {
      canDelete = true;
      break;
    }
  }

  return canDelete;
}

// Get all unique permissions
export function allPermissions() {
  let permissions = [];

  for (let val of roles.admin) {
    permissions.push(val);
  }

  return permissions;
}

// Add a new role immutably
export function addRole(role, permissios) {
  let newRoles = structuredClone(roles);

  newRoles[role] = permissios;

  return newRoles;
}
