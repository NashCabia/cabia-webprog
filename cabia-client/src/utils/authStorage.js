// Simple auth storage using localStorage
const USERS_KEY = 'cabia_users';
const CURRENT_USER_KEY = 'cabia_current_user';

export const authStorage = {
  // Get all registered users
  getAllUsers: () => {
    try {
      const users = localStorage.getItem(USERS_KEY);
      return users ? JSON.parse(users) : [];
    } catch (e) {
      console.error('Error reading users:', e);
      return [];
    }
  },

  // Register a new user
  registerUser: (name, email, password) => {
    const users = authStorage.getAllUsers();
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
      return { success: false, error: 'Email already registered.' };
    }

    // Add new user
    const newUser = { id: Date.now(), name, email, password, createdAt: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    return { success: true, user: newUser };
  },

  // Login user
  loginUser: (email, password) => {
    const users = authStorage.getAllUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      return { success: true, user };
    }
    
    return { success: false, error: 'Invalid email or password.' };
  },

  // Get current logged-in user
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem(CURRENT_USER_KEY);
      return user ? JSON.parse(user) : null;
    } catch (e) {
      console.error('Error reading current user:', e);
      return null;
    }
  },

  // Logout user
  logoutUser: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return !!authStorage.getCurrentUser();
  }
};
