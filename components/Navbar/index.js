// components/layout/Navbar.tsx
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const Navbar = (props) => {
  return (
    <nav
      className={classNames({
        "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300": true, // colors
        "flex items-center": true, // layout
        "w-full fixed z-10 px-4 shadow-sm h-16": true, //positioning & styling
      })}
    >
      <a href='/' className="dark:hover:bg-gray-900 px-4 py-2 rounded-lg font-bold text-lg">Code Assist</a>
      <div className="flex-grow"></div> {/** spacer */}
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  );
};
export default Navbar;

