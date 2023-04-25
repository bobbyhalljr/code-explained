// components/layout/Sidebar.tsx
import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "../DefaultNavItems";
import Avatar from "../Avatar";

const Sidebar = ({ open, navItems = defaultNavItems }) => {
  const ref = useRef(null);
  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true, // layout
        "bg-gray-200 text-gray-600": true, // colors
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
        "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >

      <nav className="md:sticky top-0 pt-12 md:top-16">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={classNames({
                    " hover:bg-gray-600 hover:text-white": true, //colors
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md px-2 py-4 mx-2": true, //self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      {/* account  */}
      <div className="border-t border-t-blue-500 p-4">
        <div className="flex gap-4 items-center">
          <img
            src="https://picsum.photos/id/237/200/300"
            alt="profile image"
            className="rounded-full w-10 h-10 shadow-lg"
          />
          <div className="flex flex-col ">
            <span className="my-0">Tim Mellow</span>
            <Link href="/account" className="text-blue-500 text-sm">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;