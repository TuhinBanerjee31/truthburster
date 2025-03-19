import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Search, PencilLine, Menu, X } from "lucide-react";

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const [dropDown, setDropDown] = useState(false);
  const [hide, setHide] = useState(true);

  const [searchDrop, setSearchDrop] = useState(false);
  const [hideSearch, setHideSearch] = useState(true);

  const handleDropdown = () => {
    setSearchDrop(false);
    setHideSearch(true);
    setDropDown(!dropDown);
    setTimeout(() => setHide(!hide), 215);
  };

  const handleSearchDrop = () => {
    setDropDown(false);
    setHide(true);
    setSearchDrop(!searchDrop);
    setTimeout(() => setHideSearch(!hideSearch), 100);
  };
  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full px-4 py-5 border-b-[0.1px] border-b-[#371a11] hidden md:flex justify-between">
        {/* Left Area */}
        <div className="flex gap-7 items-center">
          <div className="font-play flex gap-1 items-center">
            <img src={logo} className="w-10" />
            <h5 className="text-2xl text-[#854b23] font-medium">
              truthburster
            </h5>
          </div>

          <div className="flex font-Rubik items-center gap-2 bg-[#faf6ec] py-2 px-4 rounded-xl">
            <Search />
            <input
              type="text"
              placeholder="Enter company name"
              className="outline-none w-full"
            />
          </div>

          <div className="font-Rubik flex gap-3">
            <NavLink to={"/categories"}>Categories</NavLink>
            <NavLink to={"/resources"}>Resources</NavLink>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </div>
        </div>

        {/* Right Area */}
        <div className="flex font-Rubik items-center gap-7">
          <span className="flex items-center gap-2 cursor-pointer">
            <PencilLine size={18} />
            <NavLink to={"/write-review"}>Write a review</NavLink>
          </span>

          <div>
            <button className="border-[#ce9436] text-[#ce9436] transition-colors duration-400 hover:bg-[#ce9436] hover:text-white border cursor-pointer py-2 px-4 rounded ">
              Log In
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`w-full max-h-[50vh] ${dropDown ? "h-[50vh]" : "h-[10vh]"} ${
          searchDrop ? "h-[20vh]" : "h-[10vh]"
        } transition-all duration-300 ease-in-out flex flex-col md:hidden px-4 py-5 items-start border-b-[0.1px] border-b-[#371a11]`}
      >
        {/* Top Area */}
        <div className="w-full flex justify-between">
          <div className="flex gap-7 items-center">
            <div className="font-play flex gap-1 items-center">
              <img src={logo} className="w-8" />
              <h5 className="text-xl text-[#854b23] font-medium">
                truthburster
              </h5>
            </div>
          </div>

          <div className="flex font-Rubik items-center gap-3">
            <div
              className="border-[#ce9436] text-[#ce9436] transition-colors duration-400 hover:bg-[#ce9436] hover:text-white border cursor-pointer p-2 rounded "
              onClick={() => handleSearchDrop()}
            >
              <Search size={16} />
            </div>

            <div className="text-[#ce9436]" onClick={() => handleDropdown()}>
              {!dropDown ? (
                <Menu size={40} className="cursor-pointer" />
              ) : (
                <X size={40} className="cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        {/* Search Drop Area */}
        <div
          className={`w-full mt-3 p-2 ${
            searchDrop ? "opacity-100" : "opacity-0"
          } ${
            hideSearch ? "hidden" : "block"
          } transition-opacity duration-300 ease-in-out`}
        >
          <div className="flex font-Rubik items-center gap-2 bg-[#faf6ec] py-2 px-4 rounded-xl">
            <Search />
            <input
              type="text"
              placeholder="Enter company name"
              className="outline-none w-full"
            />
          </div>
        </div>

        {/* Menu Options Area */}
        <div
          className={`${
            dropDown ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out duration-400 ${
            hide ? "hidden" : "flex"
          } flex-col items-center gap-4 w-full py-5 mt-5`}
        >
          <NavLink
            to={"/categories"}
            className="p-2 bg-[#faf6ec] w-[80%] rounded-lg"
          >
            Categories
          </NavLink>
          <NavLink
            to={"/resources"}
            className="p-2 bg-[#faf6ec] w-[80%] rounded-lg"
          >
            Resources
          </NavLink>
          <NavLink
            to={"/about-us"}
            className="p-2 bg-[#faf6ec] w-[80%] rounded-lg"
          >
            About Us
          </NavLink>

          <div className="flex w-[80%] mt-2">
            <span className="flex items-center w-[50%] gap-2 p-2 cursor-pointer">
              <PencilLine size={18} />
              <NavLink to={"/write-review"}>Write a review</NavLink>
            </span>

            <button className="border-[#ce9436] p-1 text-[#ce9436] transition-colors duration-400 hover:bg-[#ce9436] hover:text-white border cursor-pointer w-[50%] rounded ">
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
