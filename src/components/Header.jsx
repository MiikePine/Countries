

import { IoMoonOutline } from 'react-icons/io5';
import PropTypes from 'prop-types'; // Importe PropTypes
// import { useState } from 'react';






function Header({darkMode, toggleDarkMode}) {

    // const [darkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //   setDarkMode(!darkMode);
    // };


  return (
    <div className={` ${darkMode ? 'bg-[#2b3945]' : 'bg-white'}`}>
    <div className={`flex mx-20 ${darkMode ? 'bg-[#2b3945]' : 'bg-white'} my-5 justify-between`}>
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
 