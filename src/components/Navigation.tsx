import React from "react";
import { Link } from "react-router-dom"; // if using React Router
import logo from "@/assets/soham-logo.png"; // adjust path if different

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Soham Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-gray-800">
            SOHAM Pranic Healing Centre
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/guidelines" className="text-gray-700 hover:text-blue-600">Guidelines</Link>
          <Link to="/key-points" className="text-gray-700 hover:text-blue-600">Key Points</Link>

          {/* Register Now Button */}
          <Link
            to="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
