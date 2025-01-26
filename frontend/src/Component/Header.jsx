
  import logo from "../assets/images/saylani.png";

import { Link } from "react-router-dom";
import  "../index.css"



const links = [
  { title: "Home", link: "/" },
  { title: "About", link: "about" },
  { title: "Contact us", link: "Contact" },
  { title: "login", link: "login" },

 
  
];

export default function Header() {
  
  
  const navLinks =
    "capitalize S_Underline relative inline-block after:bg-[#db4444] hover:text-[#db4444] hover:after:left-0 after:-bottom-1 w-fit hover:after:w-[100%]";

  return (
    <>
      <div className={ ` transition-color duration-300 border-b-[1px] }`}>
        <div className="h-24  justify-around  relative flex max-w-full items-center max-mm:gap-2 max-ml:gap-2">
<Link to={'/'} className="border h-24  flex justify-center items-center">
        <img src={logo}  alt="" className="h-full w-full"/>
</Link>

    

        <ul className={`transition-color duration-300 hidden md:flex gap-16  }`}>
          {links.map((item, i) => (
            <li  className={navLinks} key={i}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}

         
          
        
        </ul>

      
      


        

        
           
      </div>
            </div>
    </>
  );
}


