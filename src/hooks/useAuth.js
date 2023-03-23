import React, { useContext, useState, createContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export function ProviderAuth({ children }) {
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
};

function useProviderAuth() {
    const [user, setUser] = useState(null);
    const signin = async (email, password) => {
        setUser('login');
    }
    return {
        user, 
        signin,
        
    }
}