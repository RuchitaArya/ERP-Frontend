import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {logout} from "../../pages/auth/api/auth"
import { setLogout } from "../../store/slices/authslice";
import { unSetUser } from "../../store/slices/userSlice";

const SideMenu = () => {  
  const navigate=useNavigate();
  const dispatch =useDispatch();

const logoutHandler=async()=>{
  await logout();
  dispatch(setLogout());
  dispatch(unSetUser());
  navigate("/login")
}  ;

  return (
    <div className="w-[13%] h-[100%] border-solid border-2 border-light-gray-500 rounded-lg shadow-2xl ">
      <div  className="bg-white-500 hover:bg-blue-950 hover:text-white text-black w-[100%] h-[7%] font-bold py-2 px-4 rounded mt-5">
        <NavLink to="/">Dashboard</NavLink>
      </div>
      <div className="bg-white-500 hover:bg-blue-950 hover:text-white text-black w-[100%] h-[7%] font-bold py-2 px-4 rounded mt-5">
        <NavLink to="/team">Team</NavLink>
        
      </div>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
};

export default SideMenu;