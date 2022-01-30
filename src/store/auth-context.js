import React from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  userType: "Admin",
  setIsLoggedIn: () => {},
});

export default AuthContext;
