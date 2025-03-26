import React, { createContext, useState } from 'react';

// Create Context
export const UserContext = createContext();

// Create Provider component
export const UserProvider = ({ children }) => {
  const [userProfile] = useState({
    name: 'Ibrahim Muhammad Bello',
    age: 25
  });

  return (
    <UserContext.Provider value={userProfile}>
      {children}
    </UserContext.Provider>
  );
};
