import { useState, useEffect } from 'react';
import { Listbox } from '@headlessui/react'
import data from '../database/data.json';
// import { MdOutlineSearch } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from 'react-router-dom'; 
import Header from './Header';
import Search from './Search';
import List from './List';
import PropTypes from 'prop-types';


function Dashboard({ darkMode }) {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState({ name: 'Filter by Country' });
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    setFilteredCountries(data);
  }, []);

  useEffect(() => {
    let filtered = data;
    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedContinent.name !== 'Filter by Country') {
      filtered = filtered.filter(country => country.region === selectedContinent.name);
    }
    setFilteredCountries(filtered);
  }, [searchTerm, selectedContinent]);

  const handleContinentChange = (selectedContinent) => {
    setSelectedContinent(selectedContinent);
  };
  
  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  return (
  
      <div className={`  ${darkMode ? 'text-white dark:bg-[#202c37]' : 'text-gray-600 bg-gray-100'}`}>
        <div className=' md:flex justify-between mx-20 pt-10'>
            <Search darkMode={darkMode} onSearchTermChange={handleSearchTermChange} />
            
            <List darkMode={darkMode} handleContinentChange={handleContinentChange} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-6 gap-16 mt-10 mx-20">
        {filteredCountries.map((country, index) => (
            <NavLink key={index} to={`/countries/${country.name}`}>
            <div className={`rounded-lg shadow-md cursor-pointer h-full ${darkMode ? 'bg-[#2b3945]' : 'bg-white'}`}>
              <img src={country.flag} alt={country.name} className="w-full h-40 object-cover mb-2" />
              <div className='mx-6 mt-6 mb-10 '>
                <p className={`font-bold text-md py-1 ${darkMode ? 'text-white' : 'text-[#2b3945]'}`}>{country.name}</p>
                <p><span className={`font-semibold text-xs py-1 text-gray-700 ${darkMode ? 'text-white' : 'text-[#2b3945]'}`}>Population:</span><span className='text-xs text-gray-500'> {country.population}</span></p>
                <p><span className={`font-semibold text-xs py-1 text-gray-700 ${darkMode ? 'text-white' : 'text-[#2b3945]'}`}>Region:</span><span className='text-xs text-gray-500'> {country.region}</span></p>
                <p><span className={`font-semibold text-xs py-1 text-gray-700 ${darkMode ? 'text-white' : 'text-[#2b3945]'}`}>Capital:</span><span className='text-xs text-gray-500'> {country.capital}</span></p>
              </div>
            </div>
          </NavLink>
        ))}
</div>
      </div>



  );
}

Dashboard.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Dashboard;
