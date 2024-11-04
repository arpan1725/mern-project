import React from 'react';
import { setLocalStorage } from '../utils/localStorage';

const Header = ({ data }) => {
  const username = data?.firstName || 'Arpan'; // Fallback to 'Arpan' if data is undefined
  
  const logOutUser = () => {
    setLocalStorage('loggedInUser', ''); // Using setLocalStorage to clear the user data
    window.location.reload(); // Optional: Refresh the page to reset any user state in the UI
  };
                                                                                                                                                                                      
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">{username}</span>
      </h1>
      <button
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
        onClick={logOutUser} // Attach the logOutUser function to the button's onClick event
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
