import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink for smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          RNB Dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Skills", "Education", "Project", "Contact"].map(
            (item) => (
              <li key={item}>
                <Link
                  to={`/#${item.toLowerCase()}`} // Using HashLink for smooth scroll to sections
                  className="hover:text-blue-400 transition"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="bg-purple-600 px-4 py-2 rounded-lg text-white hover:bg-purple-900 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 w-full absolute top-full left-0 py-4">
          <ul className="flex flex-col items-center space-y-4">
            {["Home", "About", "Skills", "Education", "Project", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={`/#${item.toLowerCase()}`} // Using HashLink for smooth scroll to sections
                    className="block text-white hover:text-blue-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
            <li>
              <a
                href="/resume.pdf"
                download
                className="block bg-purple-600 px-4 py-2 rounded-lg text-white hover:bg-purple-900 transition"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
