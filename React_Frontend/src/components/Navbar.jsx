import React, { useState } from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Navbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const closeProfileMenu = () => {
    setShowProfileMenu(false);
  };

  const handleSearch = () => {
    // Replace this with your search query logic
    console.log('Search button clicked');
    // Execute your search query here
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center py-3 px-5">
        <h1 className="text-2xl font-extrabold">Bookstagram</h1>
        <div className="w-[400px] border border-gray-500 rounded flex items-center space-x-5">
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
        </div>
        <div className="flex items-center mt-3 md:mt-0 space-x-5 text-xl">
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-10 py-3">
            <li>
              <a
                href="#"
                className="hover:bg-blue-500 hover:text-white rounded-lg px-3 py-1 transition-all duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-blue-500 hover:text-white rounded-lg px-3 py-1 transition-all duration-300 ease-in-out"
              >
                My Books
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-blue-500 hover:text-white rounded-lg px-3 py-1 transition-all duration-300 ease-in-out"
              >
                Community
              </a>
            </li>
            <li>
              <div className="relative group">
                <a
                  href="#"
                  className="hover:text-white rounded-lg px-3 py-1 transition-all duration-300 ease-in-out"
                  onClick={toggleProfileMenu}
                >
                  <AccountCircleRoundedIcon />
                </a>
                {showProfileMenu && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
                    onClick={closeProfileMenu}
                  >
                    <ul className="py-2">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Your Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Sign out
                        </a>
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
