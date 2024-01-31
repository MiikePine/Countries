import { MdOutlineSearch } from "react-icons/md";
// import data from '../database/data.json';
import PropTypes from 'prop-types';


function Search({ darkMode, onSearchTermChange }) {
    const handleInputChange = (e) => {
      onSearchTermChange(e.target.value);
    };
  
    return (
      <div className={`flex items-center px-4 py-2 h-12 w-72 border text-xs text-gray-200 shadow-md rounded-sm focus:outline-none ${darkMode ? 'dark:bg-[#2b3945]' : 'bg-white'}`}>
        <MdOutlineSearch size={22} className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search for a country..."  
          className={`border text-xs h-full w-full rounded-sm border-none focus:outline-none ${darkMode ? 'text-white dark:bg-[#2b3945]' : 'text-gray-600 bg-white'}`}
          onChange={handleInputChange}
        />
      </div>
    );
  }

  Search.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    onSearchTermChange: PropTypes.func.isRequired
  };
  
  export default Search;