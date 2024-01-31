

import { IoMoonOutline } from 'react-icons/io5';
import PropTypes from 'prop-types'; 





function Header({darkMode, toggleDarkMode}) {




  return (
    <div className={` ${darkMode ? 'bg-[#2b3945]' : 'bg-white'}`}>
    <div className={`flex mx-20 ${darkMode ? 'bg-[#2b3945]' : 'bg-white'} py-5 justify-between`}>
      <div>
      <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-[#2b3945]'}`}>Where in the world?</p>
        </div>
        <div className="flex align-middle cursor-pointer" onClick={toggleDarkMode}>
          <IoMoonOutline className={`flex align-middle ${darkMode ? 'text-white' : 'text-[#2b3945]'}`} />
          <p className={`ml-2 align-middle text-sm ${darkMode ? 'text-white' : 'text-[#2b3945]'}`}>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}



// Defina os propTypes para garantir a tipagem correta das props
Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default Header;
 