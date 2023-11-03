import { Outlet, Link } from "react-router-dom";
import homeIcon from "./assets/icons/house.svg";
import resumeIcon from "./assets/icons/resume.svg";
import workIcon from "./assets/icons/work.svg";
import contactIcon from "./assets/icons/contact.svg";
import homeIconWhite from "./assets/icons/house copy.svg";
import resumeIconWhite from "./assets/icons/resume copy.svg";
import workIconWhite from "./assets/icons/work copy.svg";
import contactIconWhite from "./assets/icons/contact copy.svg";
import { useState } from "react";



export default function Layout(){
    // state of the li
    const [activeLink,setActiveLink] = useState(0);
    // function to handle the button
    const handleLinkClick = (index) => {
        setActiveLink(index);
      };
    // an object to manage menu
    const menuItems = [
        { label: 'Home', url: '/', image:homeIcon , imageWhite: homeIconWhite },
        { label: 'Resume', url: '/resume', image:resumeIcon , imageWhite: resumeIconWhite },
        { label: 'Blog', url: '/blog', image:workIcon , imageWhite: workIconWhite },
        { label: 'Contact', url: '/contact', image:contactIcon , imageWhite: contactIconWhite },
      ];
    // return  
    return(
        <div className="layout">
            <nav className="nav">
                <ul>
                    {menuItems.map((item,index)=>(
                    <li 
                        key={index}
                        className={index === activeLink ? "active" :""} 
                        onClick={()=>handleLinkClick(index)}
                    >
                        <Link  
                            key={index}
                            to={item.url} 
                            className={`no-underline ${index === activeLink ? "active1" : ""}`} 

                        >
                            <img 
                                key={index}
                                src={index === activeLink ? item.imageWhite : item.image} 
                            />
                            <p><b>{item.label}</b></p>
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}