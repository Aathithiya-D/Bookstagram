import React, { useState } from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';


export default function AdminNavbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const closeProfileMenu = () => {
    setShowProfileMenu(false);
  };

//   const handleSearch = () => {
//     // Replace this with your search query logic
//     console.log('Search button clicked');
//     // Execute your search query here
//   

  return (
    <div>
      <nav className="bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center py-4 px-5 fixed w-full top-0">
        <Link to='/admin'>
        <h1 className="text-2xl font-extrabold">Bookstagram</h1>
        </Link>
        {/* <div className="w-[400px] border border-gray-500 rounded flex items-center space-x-5">
          <input
            className="w-full bg-gray-800 outline-0 py-2 px-5 text-xs"
            type="text"
            placeholder="Search ..."
          />
          <button
            className="cursor-pointer"
            onClick={handleSearch}
          >
            <SearchOutlinedIcon />
          </button>
        </div> */}
        <div className="flex items-center mt-3 md:mt-0 space-x-5 text-xl">
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-10 py-3">
            <li>
              <div className="relative group">
                <button
                  className="hover:text-white rounded-lg px-3 py-1 transition-all duration-300 ease-in-out"
                  onClick={toggleProfileMenu}
                >
                  <AccountCircleRoundedIcon />
                </button>
                {showProfileMenu && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
                    onClick={closeProfileMenu}
                  >
                    <ul className="py-2">
                      <li>
                        <Link to='/adminProfile' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Your Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
