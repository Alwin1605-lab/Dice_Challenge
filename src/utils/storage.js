// Sample user data structure for reference
// This is stored in localStorage

const sampleUser = {
  name: "John Doe",
  email: "john@example.com",
  password: "password123", // In production, this should be hashed
  wins: 0,
  losses: 0,
  draws: 0
};

// localStorage structure:
// users: Array of user objects
// currentUser: Single user object (currently logged in)

// Helper functions for localStorage management

export const getUsers = () => {
  return JSON.parse(localStorage.getItem('users') || '[]');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const setUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const setCurrentUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const clearCurrentUser = () => {
  localStorage.removeItem('currentUser');
};

export const updateUserStats = (email, statType) => {
  const users = getUsers();
  const userIndex = users.findIndex(u => u.email === email);
  
  if (userIndex !== -1) {
    users[userIndex][statType]++;
    setUsers(users);
    setCurrentUser(users[userIndex]);
    return users[userIndex];
  }
  return null;
};
