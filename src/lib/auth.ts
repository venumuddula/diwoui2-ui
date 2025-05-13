
// Mock user data for authentication
interface User {
  username: string;
  password: string;
  name: string;
}

// Mock user database
export const users: User[] = [
  {
    username: "admin",
    password: "password123",
    name: "Admin User"
  },
  {
    username: "user",
    password: "password123",
    name: "Regular User"
  }
];

// Simple authentication function
export const authenticateUser = (username: string, password: string): User | null => {
  const user = users.find(
    (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );
  
  return user || null;
};

// Store auth state in localStorage
export const setAuthSession = (user: User | null) => {
  if (user) {
    localStorage.setItem('auth_user', JSON.stringify({
      username: user.username,
      name: user.name,
      isAuthenticated: true
    }));
  } else {
    localStorage.removeItem('auth_user');
  }
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const storedUser = localStorage.getItem('auth_user');
  return !!storedUser;
};

// Get current user info
export const getCurrentUser = () => {
  const storedUser = localStorage.getItem('auth_user');
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return null;
};

// Logout functionality
export const logout = () => {
  localStorage.removeItem('auth_user');
  window.location.href = '/login';
};
