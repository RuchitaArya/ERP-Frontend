import React from "react";
import { NavLink } from "react-router-dom";


const SideMenu = () => {    
  return (
    <div className="w-[13%] h-[100%] border-solid border-2 border-light-gray-500 rounded-lg shadow-2xl ">
      <div  className="bg-white-500 hover:bg-blue-950 hover:text-white text-black w-[100%] h-[7%] font-bold py-2 px-4 rounded mt-5">
        <NavLink to="/">Dashboard</NavLink>
      </div>
      <div className="bg-white-500 hover:bg-blue-950 hover:text-white text-black w-[100%] h-[7%] font-bold py-2 px-4 rounded mt-5">
        <NavLink to="/team">Team</NavLink>
      </div>
    </div>
  );
};

export default SideMenu;