import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const AuthProvider = ({children}:any) => {

  const token = Cookies.get('tokenTdcAdminLogin');

  const [isAuthenticated, setIsAuthenticated] = useState( token?true:false );

  const navigate = useNavigate();

  async function signIn({ email, password }:any) {
      axios.post(
        'https://projectpaintball.azurewebsites.net/user/login',
        {
          email: email,
          password: password
        }
      ).then(response=>{
        navigate('/admin')
        Cookies.set('tokenTdcAdminLogin', response.data.accessToken, { expires: 0.1 })
      })
  }

  async function logout() {
      await Cookies.remove('tokenTdcAdminLogin')
      navigate(0)
}

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
