import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h1 className="text-2xl font-bold mb-6">YouTube Clone</h1>
      <nav className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-md ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/trending"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-md ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`
          }
        >
          Trending
        </NavLink>
        <NavLink
          to="/subscriptions"
          className={({ isActive }) =>
            `block py-2 px-4 rounded-md ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`
          }
        >
          Subscriptions
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
