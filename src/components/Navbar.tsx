import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <nav className="sticky top-0 flex justify-between px-6 py-3 items-center shadow-sm z-20 bg-white dark:bg-dark-10">
        <div className="flex gap-4 items-center">
          <img src='logo.png' alt='adhunik code logo' width={20} height={20}></img>
          <p className="text-xl font-semibold text-dark-10 dark:text-white">Adhunik Code</p>
      
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-x-10">
            <li>
              <NavLink to="" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="products" className="nav-link">
                Our Products
              </NavLink>
            </li>
           
            <li>
              <NavLink to="blog" className="nav-link">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        
        
        <ThemeToggle/>
        <button className="dark:text-white md:hidden z-40" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
      </nav>

      {/* Off-canvas menu and backdrop */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 "
            onClick={toggleMenu}
          ></div>

          <div className="dark:bg-dark-20 fixed inset-y-0 left-0 w-64 bg-white p-4 transform translate-x-0 transition duration-300 ease-in-out z-50">
            <div className="flex gap-2">
              <p className="text-xl font-semibold text-dark-10 dark:text-white">Adhunik Code</p>
            </div>
            <hr className="border-dark-50 my-6"></hr>
            <nav className="mt-5">
              <ul className="flex flex-col gap-6">
                <li>
                  <NavLink to="" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="about-us" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="products" className="nav-link">
                    Our Products
                  </NavLink>
                </li>
               
                <li>
                  <NavLink to="blog" className="nav-link">
                    Blog
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;