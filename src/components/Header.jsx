

import { IoMoonOutline } from 'react-icons/io5';
import PropTypes from 'prop-types'; // Importe PropTypes

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={`header ${darkMode ? 'bg-[#2b3945]' : 'bg-white'}`}>
    <div className={`flex mx-20 ${darkMode ? 'bg-[#2b3945]' : 'bg-white'} my-5 justify-between`}>
      <div>
          <p className="font-bold text-lg">Where in the world?</p>
        </div>
        <div className="flex align-middle cursor-pointer" onClick={toggleDarkMode}>
          <IoMoonOutline className="flex align-middle" />
          <p className="ml-2 align-middle text-sm">Dark Mode</p>
        </div>
      </div>
    </header>
  );
}



// Defina os propTypes para garantir a tipagem correta das props
Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default Header;
 