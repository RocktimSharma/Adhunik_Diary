import { useState } from "react";

import ThemeToggle from "../ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <nav className="sticky top-0 flex justify-between px-6 py-3 items-center shadow-sm z-20 bg-white dark:bg-dark-10">
        <div className="flex gap-4 items-center">
          <p className="text-xl font-semibold text-dark-10 dark:text-white">
            Dashboard
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <ThemeToggle />
          <div>
            <div className="flex items-center gap-1" >
            <img
            src="profile-pic.png"
            className="avatar-sm"
            onClick={toggleMenu}
          ></img>

            </div>
          
          {isOpen && 
          <ul className="right-5 mt-2 py-2 rounded-md rounded-tr-none bg-white dark:bg-dark-10 absolute border border-dark-70 dark:border-dark-70 text-dark-10 dark:text-dark-90">
            <li className="px-2 py-1 hover:bg-dark-90 dark:hover:bg-dark-30">My Profile</li>
            <li className="px-2 py-1 hover:bg-dark-90 dark:hover:bg-dark-30 "><FontAwesomeIcon className="rotate-180 text-sm " icon={faRightFromBracket}/> Logout</li>
          </ul>

}
          </div>
        
        </div>
      </nav>
    </>
  );
};

export default DashboardNavbar;
