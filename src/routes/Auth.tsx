import React, { FC, createContext, useState } from 'react';
import { DefaultData } from '../pages/UserPage/UserData';

interface AuthProviderProps {
  children: any
}

const AuthContextValue = {
  isAuthenticated: false,
  loginSuccess: () => { },
  logoutSuccess: () => { },
  handleLoginUser: (user: DefaultData) => { },
  loginUserData :{Img_URL: "", name:"", country:"", rating:0, id:-1, password:""},
};

export const AuthContext = createContext(AuthContextValue);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginUserData, setLoginUserData] = useState<DefaultData>({Img_URL: "", name:"", country:"", rating:0, id:-1, password:""})

  const loginSuccess = () => {
    setIsAuthenticated(true);
  };

  const logoutSuccess = () => {
    setIsAuthenticated(false);
  };
  const handleLoginUser = (userData: DefaultData) => {
    setLoginUserData(userData)
   
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginSuccess, logoutSuccess, handleLoginUser, loginUserData}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
