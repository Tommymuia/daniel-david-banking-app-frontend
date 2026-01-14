import { Link, useLocation } from 'react-router-dom'; // You need react-router-dom for this to work

/**
 * Sidebar Component
 * This component provides the vertical navigation menu for the application.
 * It highlights the currently active page.
 */
const Sidebar = () => {
  // Get the current URL path to determine the active link
  const location = useLocation();

  // Helper function to check if a link is the active one
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <ul className="space-y-2">
        {/* Dashboard Link */}
        <li>
          <Link 
            to="/dashboard" 
            // Conditionally apply the 'active' class
            className={`block p-2 rounded transition-colors ${
              isActive('/dashboard') 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            Dashboard
          </Link>
        </li>

        {/* Settings Link */}
        <li>
          <Link 
            to="/settings"
            className={`block p-2 rounded transition-colors ${
              isActive('/settings') 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            Settings
          </Link>
        </li>

        {/* Transfer Link */}
        <li>
          <Link 
            to="/transfer"
            className={`block p-2 rounded transition-colors ${
              isActive('/transfer') 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            Transfer
          </Link>
        </li>

        {/* Transactions Link */}
        <li>
          <Link 
            to="/transactions"
            className={`block p-2 rounded transition-colors ${
              isActive('/transactions') 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            Transactions
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;