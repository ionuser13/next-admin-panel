import React, { useContext, useState, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);
  const signin = async (email, password) => {
    const options = {
      Headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
    if(access_token) {
      const token = access_token.access_token;
      Cookies.set('token', token, { expires: 5 });
      axios.defaults.headers.Authorization = `Bearer ${token}`; //sends information to replace the default value with the token, so we can send this in the query
      const { data: user } = await axios.get(endPoints.auth.profile); // to be able to show the user
      setUser(user);//keeps the user info across the app
    }
  };
  return {
    user,
    signin,
  };
}
