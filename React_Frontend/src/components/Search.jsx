import React, { useState } from 'react';
import axios from 'axios';


const SearchComponent = () => {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const token = localStorage.getItem('jwtToken');

  const headers = {
    'Authorization': `Bearer ${token}`
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/book/getAllBooks/${input}`, { headers: headers });
      setSearchResults(response.data); // Assuming the response contains the search results
      setShowDropdown(true); // Show the dropdown once results are fetched
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="relative">
      <input
        className="w-full bg-gray-800 outline-0 py-2 text-xs"
        type="text"
        placeholder="Search Book"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowDropdown(false)} // Hide the dropdown on input focus
      />
      {/* Dropdown for displaying search results */}
      {showDropdown && (
        <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
          {searchResults.length > 0 ? (
            <ul className="py-1">
              {searchResults.map((result) => (
                <li key={result.id} className="cursor-pointer px-4 py-2 hover:bg-gray-200">
                  {result.bookName}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-2">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
