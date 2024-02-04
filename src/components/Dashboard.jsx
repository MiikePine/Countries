import { useState, useEffect } from 'react';
// import data from '../database/data.json';
// import { MdOutlineSearch } from "react-icons/md";

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
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        console.log(data); // Log dos dados etornados pela API
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...filteredCountries]; // Cria uma nova cópia do array
    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name && country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedContinent.name !== 'Filter by Country') {
      filtered = filtered.filter(country => country.region === selectedContinent.name);
    }
    setFilteredCountries(filtered);
  }, [searchTerm, selectedContinent]);// Remova filteredCountries da lista de dependências


  const handleContinentChange = (selectedContinent) => {
    setSelectedContinent(selectedContinent);
  };
  
  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  return (
  
      <div className={`  ${darkMode ? 'text-white dark:bg-[#202c37]' : 'text-gray-600 bg-gray-100'}`}>
        <div className=' md:flex  justify-between mx-2 md:mx-20 pt-10'>
        <div className="mb-8"> {/* Adicionando espaço abaixo da barra de pesquisa */}
             <Search darkMode={darkMode} onSearchTermChange={handleSearchTermChange} />
            </div>
            <div>
              <List darkMode={darkMode} handleContinentChange={handleContinentChange} />
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-16 mt-10 mx-10 md:mx-20">
        {filteredCountries.map((country, index) => (
            <NavLink key={index} to={`/countries/${country.name.common}`}>
            <div className={`rounded-lg shadow-md cursor-pointer h-full ${darkMode ? 'bg-[#2b3945]' : 'bg-white'}`}>
              <img src={country.flags.png} alt={country.name.common} className="w-full h-40 object-cover mb-2" />
              <div className='mx-6 mt-6 mb-10 '>
                <p className={`font-bold text-md py-1 ${darkMode ? 'text-white' : 'text-[#2b3945]'}`}>{country.name.common}</p>
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
