import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const user = true;
  const navigate = useNavigate(); // Use navigate hook to handle navigation

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    // Replace "search-result" with the actual path for the search result page
    const searchResultUrl = `/search-result?query=${encodeURIComponent(
      searchTerm
    )}`;
    navigate(searchResultUrl); // Use navigate to navigate to the search result page
    setIsSearchOpen(false); // Close the search input
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/colleges"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admission"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-college"
          className={({ isActive }) =>
            isActive ? " text-[#ff4838] navClass" : "navClass"
          }
        >
          My College
        </NavLink>
      </li>
      <li>
        <BsSearch className="cursor-pointer" onClick={handleSearch} />
      </li>
      <li>
        <form onSubmit={handleSubmitSearch}>
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className={`bg-white absolute flex flex-col items-start p-2 gap-3 duration-500 border border-sky-500 outline-sky-500 ${
              isSearchOpen
                ? "md:top-[3.72rem] top-[8.5rem] md:right-72 right-24"
                : "md:-top-64 md:right-72 -top-48 right-24"
            }`}
          />
        </form>
      </li>
    </>
  );

  const handleToggle = () => {
    setIsOpen((prevState) => {
      setIsSubOpen(false);
      return !prevState;
    });
  };

  return (
    <div className="bg-[#131D4E] sticky top-0 z-50 flex items-center px-3 md:px-0 lg:px-0 xl:px-0 2xl:px-0 gap-5">
      <div className="container mx-auto py-4 flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start md:items-center justify-between">
        <div>
          <Link to="/">
            <h1 className="text-white text-lg font-semibold">Academiclandia</h1>
          </Link>
        </div>
        {/* large screen Nav */}
        <div className="hidden md:block lg:block xl:block 2xl:block">
          <nav className="text-white">
            <ul className="flex items-center gap-7">
              {/* nav items goes here */}
              {navItems}
            </ul>
          </nav>
        </div>
        {/* small screen nav */}
        <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden w-full z-10">
          <nav className="text-white -ml-3">
            <ul
              className={`bg-[#131D4E] absolute w-full flex flex-col items-start pl-12 pb-5 gap-3 duration-500 ${
                isOpen ? "top-12" : "-top-64"
              }`}
            >
              {/* nav items goes here */}
              {navItems}
            </ul>
          </nav>
        </div>
      </div>
      {/* avatar */}
      {user ? (
        <>
          <div className="md:mr-5">
            <div onClick={() => setIsSubOpen(!isSubOpen)}>
              <h1 className="text-white text-xs cursor-pointer">
                Welcome, My Name
              </h1>
            </div>
            <nav className="z-40 text-white -ml-20">
              <ul
                className={`bg-[#131D4E] absolute flex flex-col items-start pl-3 pr-8 pb-5 gap-3 duration-500 z-40 ${
                  isSubOpen ? "top-12 md:top-[3.25rem]" : "-top-64"
                }`}
              >
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? " text-[#ff4838] navClass" : "navClass"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    // onClick={handleLogOut}
                    className="font-barlow font-semibold hover:text-[#ff4838] duration-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      ) : (
        <>
          <ul className="flex gap-7 md:mr-5">
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? " text-[#ff4838] navClass" : "text-white navClass"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? " text-[#ff4838] navClass" : "text-white navClass"
                }
              >
                Registration
              </NavLink>
            </li>
          </ul>
        </>
      )}

      <div
        className=" block md:hidden lg:hidden xl:hidden 2xl:hidden text-white text-2xl py-3 transform hover:rotate-180 transition duration-300 cursor-pointer"
        onClick={handleToggle}
      >
        {isOpen === true ? <FaXmark /> : <HiMenu />}
      </div>
    </div>
  );
};

export default Navbar;
