import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // scroll effect
    const HandleChange = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", HandleChange);
    return () => {
      window.removeEventListener("scroll", HandleChange);
    };
  }, []);

  useEffect(() => {
    // check login state
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // redirect to home
  };

  return (
    <div className="pt-16">
      <div
        className={`fixed w-full h-20 top-0 left-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-red-50 duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-50 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/allcourses">Course</Link>
                </li>
                <li>
                  <a href="tel:+916289161641">Call Now</a>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                </li>
              </ul>
            </div>
            <a className="cursor-pointer text-2xl font-bold">
              NotesDekho (exam ka asli dost 😎📚)
            </a>
          </div>

          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/allcourses">Course</Link>
                </li>
                <li>
                  <a href="tel:+916289161641">Call Now</a>
                </li>
                <li>
                  <Link to="/aboutus">About</Link>
                </li>
              </ul>
            </div>

     {/* Right side buttons */}
<div className="flex items-center space-x-4">
  {isLoggedIn ? (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
    >
      Logout
    </button>
  ) : (
    <>
      {/* Removed Signup button */}

      <button
        type="button"
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 hover:opacity-80 transition duration-300"
      >
        <img
          src="login.png"
          alt="Login"
          className="w-6 h-6"
        />
      </button>
      <Login />
    </>
  )}
</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
