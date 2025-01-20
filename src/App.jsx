import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Display from "./components/Landing/Display";
import Home from "./components/Home/Home";
import Sidebar from "./components/Home/Sidebar";
import Channel from "./components/Home/Channel";
import Video from "./components/Home/Video";
import { RiMenuFoldLine , RiMenuUnfoldLine } from "react-icons/ri";
import Navbar from "./components/Home/Navbar";
import Trending from "./components/Trending/Trending";
import Subscribtions from "./components/Subscribtions/Subscribtions";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const LayoutWithSidebar = ({ children }) => (
    <>
    
      <Navbar />
    <div className="flex">

      {/* Sidebar */}
      {isSidebarOpen && <Sidebar />}

      {/* Main Content */}
      <div className="flex-1">
        {/* Toggle Button */}
        <div className="">  
          {/* p-4 static  bg-gray-100 shadow-md |> for above className */}
          <button
            onClick={toggleSidebar}
            className="bg-gray-900 absolute top-3 left-2 text-white py-2 px-4 rounded-md"
          >
            {isSidebarOpen ? <RiMenuFoldLine /> : <RiMenuUnfoldLine  />}
          </button>
        </div>

        {/* Render children */}
        <div className="p-4">{children}</div>
      </div>
    </div>
    </>
  );

  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          {/* Routes without Sidebar */}
          <Route path="/" element={<Display />} />
          <Route path="/login" element={<Login />} />

          {/* Routes with Sidebar */}
          <Route
            path="/home"
            element={
              <LayoutWithSidebar>
                <Home />
              </LayoutWithSidebar>
            }
          />

          <Route
            path="/channel"
            element={
              <LayoutWithSidebar>
                <Channel />
              </LayoutWithSidebar>
            }
          />

          <Route
            path="/video"
            element={
              <LayoutWithSidebar>
                <Video />
              </LayoutWithSidebar>
            }
          />

          <Route
            path="/trending"
            element={
              <LayoutWithSidebar>
                <Trending />
              </LayoutWithSidebar>
            }
          />

          <Route
            path="/subscribtions"
            element={
              <LayoutWithSidebar>
                <Subscribtions />
              </LayoutWithSidebar>
            }
          />

          {/* <Route
            path="/video"
            element={
              <LayoutWithSidebar>
                <Video />
              </LayoutWithSidebar>
            }
          /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
