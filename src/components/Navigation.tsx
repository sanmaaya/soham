import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import logo from "@/assets/soham-logo.png"; // adjust path if needed

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo + Title (same style as before, just added logo) */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Soham Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-gray-800">
            SOHAM Pranic Healing Centre
          </span>
        </div>

        {/* Navigation Links (unchanged) */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link to="/courses" className="text-gray-700 hover:text-primary">Courses</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
          <Link to="/guidelines" className="text-gray-700 hover:text-primary">Guidelines</Link>
          <Link to="/key-points" className="text-gray-700 hover:text-primary">Key Points</Link>

          {/* Register Now Button (unchanged) */}
          <Link
            to="/register"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
