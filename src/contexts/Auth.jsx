import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [auth, setAuth]=useState({
        user: null,
        token: '',
    })

    //default authorization
    axios.defaults.headers.common['Authorization']
  return (
    
  )
}

export default Auth