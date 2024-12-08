import React, { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
// import NavLinks from "./NavLinks";
const themes = {
  winter: "winter",
  dracula: "dracula",
};
const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};
const Navbar = () => {
  const [theme, setTheme] = useState(themes.winter);
  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav className="bg-base-200">
        <div className="navbar align-elements">
          <div className="navbar-start">
            <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl">
              Store
            </NavLink>
            <div className="dropdown">
              <label className="btn btn-ghost lg:hidden">
                <FaBarsStaggered className="h-6 w-6" tabIndex={0} />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
              >
                <NavLinks />
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
              <NavLinks />
            </ul>
          </div>
          <div className="navbar-end">
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleTheme} />
              <BsSunFill className="swap-on h-6 w-6 " />
              <BsMoonFill className="swap-off h-6 w-6" />
            </label>
            <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md">
              <div className="indicator">
                <BsCart3 className="h-6 w-6" />
                <span className="indicator-item badge badge-sm badge-primary">
                  8
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
