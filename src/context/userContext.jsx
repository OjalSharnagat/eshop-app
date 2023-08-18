import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get('/api/v1/users') // Change the endpoint accordingly
        .then(({ data }) => {
          setUser(data);
          setIsLoggedIn(true); // Set authentication status
          setIsAdmin(data.isAdmin); // Set admin status based on user data
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
}
