import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { BiSolidVideos } from "react-icons/bi";
import { RiHistoryLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";








const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-dvh p-4">
      <h1 className="text-2xl font-bold mb-6">YouTube Clone</h1>
      <nav className="space-y-4">
        
        
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-md ${isActive ? "bg-slate-700" : "hover:bg-gray-700"}`
          }>
            <div className="flex flex-row items-center gap-3">
          <AiFillHome size={20}/>Home
            </div>
        </NavLink>


        <NavLink
          to="/explore"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-md ${isActive ? "bg-slate-700" : "hover:bg-gray-700"}`
          }>
            <div className="flex flex-row items-center gap-3">
          <MdOutlineExplore size={22}/>Explore
            </div>
        </NavLink>


        <NavLink
          to="/subscriptions"
          className={({ isActive }) =>
            `block py-2 px-4  rounded-md ${isActive ? "bg-slate-700" : "hover:bg-gray-700"}`
          }>
            <div className="flex flex-row items-center gap-3">
          <MdSubscriptions size={20} />Subscriptions
            </div>
        </NavLink>

        <div className="border-b-2 border-gray-700"></div>

        <NavLink
          to="/library"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-md ${isActive ? "bg-slate-700" : "hover:bg-gray-700"}`
          }>
            <div className="flex flex-row items-center gap-3">
          <BiSolidVideos size={20} />Library
            </div>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-md ${isActive ? "bg-slate-700" : "hover:bg-gray-700"}`
          }>
            <div className="flex flex-row items-center gap-3">
          <RiHistoryLine size={20} />History
            </div>
        </NavLink>
            

        <NavLink
          to="/video"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-md ${isActive ? "bg-slate-700" : "hover:bg-gray-700"}`
          }>
          <div className="flex flex-row items-center gap-3">
          <GoVideo size={20} /> Your Videos
          </div>
        </NavLink>


        <NavLink
          to="/shorts"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-md ${isActive ? "bg-slate-700" : "hover:bg-gray-700"}`
          }>
          <div className="flex flex-row items-center gap-3">
          <SiYoutubeshorts size={20} /> Shorts
          </div>
        </NavLink>


      </nav>
    </div>
  );
};

export default Sidebar;
