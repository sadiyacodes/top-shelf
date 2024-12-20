import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/Auth';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
    const [ auth , setAuth ] = useAuth();
    const navigate = useNavigate();

    const handleLogout =()=>{
        try{
            setAuth((prev)=>{
                return{...prev, user:null, token:" "};
            });
            localStorage.removeItem('auth');
            navigate('/login');
            toast.success('Logged out Successfully');
        }
        catch(error)
        {
            toast.error("Something Went Wrong");
        }
    }
  return (
    <div className='flex-col space-y-4 w-full'>
        <h2 className='text-xl font-ebgm md:pl-8 text-justify'>
            Dashboard
        </h2>
        <div className="flex md:flex-col space-x-3 md:space-x-0 md:space-y-4">
        <NavLink
          to="/dashboard/user/edit-profile"
          className="w-1/2 bg-greybtn text-mid  focus:ring-4 focus:outline-none  font-medium rounded-lg text-xs md:text-sm px-2 py-2 md:px-5 md:py-2.5 text-center  hover:scale-105 transition-all duration-150"
        >
          Edit Profile
        </NavLink>

        <NavLink
          to="/cart"
          className="w-1/2 bg-greybtn text-mid  focus:ring-4 focus:outline-none  font-medium rounded-lg text-xs md:text-sm px-2 py-2 md:px-5 md:py-2.5 text-center  hover:scale-105 transition-all duration-150"
        >
          Cart
        </NavLink>

        <NavLink
          className="w-1/2 bg-brandred text-mid  focus:ring-4 focus:outline-none  font-medium rounded-lg text-xs md:text-sm px-2 py-2 md:px-5 md:py-2.5 text-center  hover:scale-105 transition-all duration-150"
          onClick={handleLogout}
        >
          Logout
        </NavLink>
        </div>
    </div>
  )
}

export default UserMenu