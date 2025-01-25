import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/logo/logo.svg";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import  "../index.css"
import { IoSunnyOutline } from "react-icons/io5";
import { BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";

const links = [
  { title: "Home", link: "/" },
  { title: "About", link: "about" },
  { title: "Contact us", link: "Contact" },
  { title: "login", link: "login" },
 
  
];

export default function Header() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const isLogin = true;
  const navLinks =
    "capitalize S_Underline relative inline-block after:bg-[#db4444] hover:text-[#db4444] hover:after:left-0 after:-bottom-1 w-fit hover:after:w-[100%]";

  return (
    <>
      <div className={ ` transition-color duration-300 border-b-[1px]  ${darkMode ? "bg-slate-900 text-white" : ""}`}>
        <div className="h-24  justify-around  relative flex max-w-full items-center max-mm:gap-2 max-ml:gap-2">
<Link to={'/'} className="max-xs:w-8 max-xs:h-8 max-mm:w-7 max-mm:h-7">
        <img src={logo} alt="" />
</Link>

    

        <ul className={`transition-color duration-300 hidden md:flex gap-16  ${darkMode ? "text-white" : ""}`}>
          {links.map((item, i) => (
            <li  className={navLinks} key={i}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}

          {!isLogin ? (
            <li className={navLinks}>
              <Link to="/Login">Login</Link>
            </li>
          ) : null}
        </ul>

      
      


        

        
           
      </div>
            </div>
    </>
  );
}
