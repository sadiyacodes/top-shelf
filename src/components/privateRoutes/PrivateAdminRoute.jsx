import React , { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/Auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Redirect from '../Redirect';

const privateAdminRoute = () => {
  const [isAdmin, setisAdmin] = useState(false);
  const [auth, setAuth]=useAuth();

  useEffect(()=>{
    const authCheck = async()=>{
      const response = await axios.get(   
             `${import.meta.env.VITE_BACKEND_API}/api/v1/auth/admin-auth`
      );

      if(response.data.isAdmin)
      {
        setisAdmin(true);
      }
      else{
        setisAdmin(false);
      }
    };
    if(auth?.token)
      authCheck();
   
  },[auth?.token]);
 
  

  return (
    <>
    {isAdmin? <Outlet /> : <Redirect path="" /> }
    </>
  )
}

export default privateAdminRoute