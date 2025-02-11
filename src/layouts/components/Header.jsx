import { useSelector } from "react-redux";
import img from "./pictures/logo.jpg";

const Header = () => {
   const userData = useSelector((state) => state.user.userData);

   return (
      <>

         <div className="flex gap-2 shadow-xl header w-[100%] h-[10%] ">
            <div><img src={img} alt="" className="logo ml-20 w-[96%] h-[96%]" /></div>
            <div>welcome  {userData.name || userData.email}</div>
            <div className="HeaderGap mt-8 ml-[70%]"><i class="fa-regular fa-bell fa-flip-horizontal fa-xl"></i></div>
            <div className="mt-8"><i class="fa-solid fa-registered fa-2xl"></i></div>
            <h3 className="mt-8">Hello, Ruchi</h3>
            <div className="mt-8">< i class="fa-solid fa-angle-down fa-xl"></i></div>
         </div>
      </>
   )
}

export default Header;