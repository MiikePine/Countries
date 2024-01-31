import { useState, useEffect } from 'react';
import Header from "./Header";
import { Listbox } from '@headlessui/react'
import data from '../database/data.json';
import { MdOutlineSearch } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from 'react-router-dom'; 




const continent = [
  { id: 1, name: 'Africa', unavailable: false },
  { id: 2, name: 'Europe', unavailable: false },
  { id: 3, name: 'Americas', unavailable: false },
  { id: 4, name: 'Asia', unavailable: false },
  { id: 5, name: 'Oceania', unavailable: false },
]

function Dashboard({ darkMode, toggleDarkMode }) {
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
  

  return (
    <div className={`dashboard ${darkMode ? 'dark:bg-elements' : ''}`}>
  
      <div className={`h-screen bg-gray-50 ${darkMode ? 'dark:bg-[#202c37]' : ''}`}>
        <div className='flex justify-between mx-20 pt-10'>
        <div className={`flex items-center px-4 py-2 h-12 w-72 border text-xs text-gray-200 shadow-md rounded-sm focus:outline-none ${darkMode ? 'dark:bg-[#2b3945]' : 'bg-white'}`}>
          <MdOutlineSearch size={22} className="text-gray-400 mr-2" />
          <input 
    type="text" 
    placeholder="Search for a country..."  
    className={`border text-xs h-full w-full text-gray-600 rounded-sm border-none bg-white focus:outline-none  ${darkMode ? 'dark:bg-[#2b3945]' : 'bg-white'}`} 
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
/>
        </div>


        <div>
        
        <Listbox value={selectedContinent} onChange={handleContinentChange}>
        

        <Listbox.Button className="border px-4 py-4 w-44 bg-white rounded-sm text-gray-600 text-xs shadow-md focus:outline-none flex justify-between">
    {selectedContinent.name}
    <MdKeyboardArrowDown size={18}/>
  </Listbox.Button>          
  <Listbox.Options className="absolute z-10 mt-2 py-4 px-4 w-44 bg-white text-gray-600 text-xs border rounded-sm shadow-md cursor-pointer">
            {continent.map((continent) => (
              <Listbox.Option
              className="py-1"
                key={continent.id}
                value={continent}
                disabled={continent.unavailable}
              >
            
                {continent.name}
                
              </Listbox.Option>
            ))}
          </Listbox.Options>
       </Listbox>
        </div>

      
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-6 gap-16 mt-10 mx-20">
        {filteredCountries.map((country, index) => (
            <NavLink key={index} to={`/countries/${country.name}`}>
<div className={`rounded-lg shadow-md cursor-pointer h-full ${darkMode ? 'bg-[#2b3945]' : 'bg-white'}`}>
              <img src={country.flag} alt={country.name} className="w-full h-40 object-cover mb-2" />
              <div className='mx-6 mt-6 mb-10 '>
                <p className="font-bold text-md py-1">{country.name}</p>
                <p><span className="font-semibold text-xs py-1 text-gray-700">Population:</span><span className='text-xs text-gray-500'> {country.population}</span></p>
                <p><span className="font-semibold text-xs py-1 text-gray-700">Region:</span><span className='text-xs text-gray-500'> {country.region}</span></p>
                <p><span className="font-semibold text-xs py-1 text-gray-700">Capital:</span><span className='text-xs text-gray-500'> {country.capital}</span></p>
              </div>
            </div>
          </NavLink>
        ))}
</div>
      </div>
  </div>


  );
}

export default Dashboard;
