import { Link } from 'react-router-dom'; // You need react-router-dom for this to work
import { useAuth } from '../context/AuthContext'; // Import the auth hook

/**
 * Navbar Component
 * This component provides the top navigation for the application.
 * It includes the app logo, main navigation links, and user controls.
 */
const Navbar = () => {
  // Get user data and logout function from the auth context
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Logo / Brand Name */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition-colors">Banking app</Link>
        </div>

        {/* Navigation Links and User Controls */}
        <div className="flex space-x-4">
          {/* Public Navigation Links */}
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>

          {/* Conditional Rendering based on User Authentication */}
          {user ? (
            <>
              {/* If user is logged in, show their balance and a logout button */}
              <Link 
                to="/account-balance" 
                className="hover:text-gray-300 transition-colors"
              >
                Balance: ${user.accountBalance.toFixed(2)}
              </Link>
              <button 
                onClick={logout} 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            // If user is not logged in, show a login link
            <Link 
              to="/login" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;