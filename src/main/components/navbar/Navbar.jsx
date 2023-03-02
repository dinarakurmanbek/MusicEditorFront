import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PathsMap } from "../../routes/paths/MainPaths";
import { Button } from "../../UI/Button";
import { FullLogoIcon } from "../../UI/Icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-[4rem] max-w-[1240px] mx-auto px-4 text-white bg-[#211E1E] w-full">
      <div className="flex">
        <FullLogoIcon />
      </div>
      <ul className="hidden lg:flex">
        <li className="p-4">
          <Link to={PathsMap.home.get()}>Home</Link>
        </li>
        <li className="p-4">
          <Link to={PathsMap.edit.get()}>Project</Link>
        </li>
        <li className="p-4">
          <Link to={PathsMap.help.get()}>Help</Link>
        </li>
      </ul>
      <div className="flex items-center space-x-[20px]">
        <div className="flex space-x-[20px]">
          <Button type="outline" text="Login" />
          <Button type="fill" text="Sign Up" />
        </div>

        <div onClick={handleNav} className="block lg:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#211E1E] ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex px-8 py-4">
          <FullLogoIcon />
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600"><Link to={PathsMap.home.get()}>Home</Link></li>
          <li className="p-4 border-b border-gray-600"><Link to={PathsMap.project.get()}>About Us</Link></li>
          <li className="p-4 border-b border-gray-600"><Link to={PathsMap.help.get()}>Help</Link></li>
          <li className="p-4">Contact</li>
        </ul>
        {/* <div className="flex space-x-[20px]">
          <Button type="outline" text="Login" />
          <Button type="fill" text="Sign Up" />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
