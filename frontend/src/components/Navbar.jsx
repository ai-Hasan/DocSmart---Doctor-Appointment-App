import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null); // Set token to null when logging out
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 h-20 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">DOCTORS</li>
        </NavLink>
        <NavLink to="/my-appointments">
          <li className="py-1">BOOKINGS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT US</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_icon}
              alt="profile icon"
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="dropdown icon"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-2 p-4">
                {/* <p
                  onClick={() => navigate("/profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p> */}
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Log Out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary border-2 border-[#2D9CDB] text-white rounded-full py-2 px-6 font-semibold hidden md:block"
          >
            Sign Up
          </button>
        )}
      </div>

      <img
        onClick={() => setShowMenu(true)}
        className="w-6 md:hidden"
        src={assets.menu_icon}
        alt="menu icon"
      />
      <div
        className={`${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between p-6">
          <img
            onClick={() => navigate("/")}
            className="w-24"
            src={assets.logo}
            alt="logo"
          />
          <img
            onClick={() => setShowMenu(false)}
            className="w-6 md:hidden"
            src={assets.cross_icon}
            alt="close icon"
          />
        </div>
        <div className="flex flex-col items-center gap-6">
          <NavLink to="/" onClick={() => setShowMenu(false)}>
            <p className="text-lg px-3 py-1 rounded font-semibold">HOME</p>
          </NavLink>
          <NavLink to="/doctors" onClick={() => setShowMenu(false)}>
            <p className="text-lg px-3 py-1 rounded font-semibold">DOCTORS</p>
          </NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)}>
            <p className="text-lg px-3 py-1 rounded font-semibold">ABOUT US</p>
          </NavLink>
          <NavLink to="/my-appointments" onClick={() => setShowMenu(false)}>
            <p className="text-lg px-3 py-1 rounded font-semibold">
              APPOINTMENTS
            </p>
          </NavLink>
          {!token && (
            <button className="bg-primary text-white py-2 w-1/2 text-lg rounded">
              Sign Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
