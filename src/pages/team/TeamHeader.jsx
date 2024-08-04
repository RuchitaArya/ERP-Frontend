import React from "react";
import { Link } from "react-router-dom";

const TeamHeader = () => {
  return (
    <div className="flex gap-2 mt-5">
      <Link to="./employee" className="bg-white-500 hover:bg-blue-950 hover:text-white text-black w-[100%] h-[7%] font-bold py-2 px-4 hover-button border-solid border-2 rounded-lg text-center">Employee</Link>
      <Link to="./department" className="bg-white-500 hover:bg-blue-950 hover:text-white text-black w-[100%] h-[7%] font-bold py-2 px-4 hover-button border-solid border-2 rounded-lg text-center">Department</Link>
      <Link to="./role" className="bg-white-500 hover:bg-blue-950 hover:text-white text-black h-[7%] w-[60%]font-bold py-2 px-4 hover-button border-solid border-2 rounded-lg text-center">Role</Link>
    </div>
  );
};

export default TeamHeader;