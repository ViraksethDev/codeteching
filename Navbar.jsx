import React from "react";

function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">CodeKhmer</h1>
      <ul className="flex justify-between items-center space-x-5">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Settings</li>
      </ul>
      <button>LogIn</button>
    </div>
  );
}

export default Navbar;
