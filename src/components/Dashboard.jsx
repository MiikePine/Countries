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

function Dashboard() {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState({ name: 'Filter by Country' });

  useEffect(() => {
    setFilteredCountries(data);
  }, []);

  const handleContinentChange = (selectedContinent) => {
    setSelectedContinent(selectedContinent);
    const filteredCountries = data.filter(country => country.region === selectedContinent.name);
    setFilteredCountries(filteredCountries);
  };
  

  return (
    <>
    <div className='shadow-md py-2'>
      <Header /> 
      </div>
      <div className='h-screen bg-gray-50 '>
        <div className='flex justify-between mx-20 pt-10'>
        <div className="flex items-center px-4 py-2 h-12 w-72 border text-xs text-gray-200 shadow-md bg-white rounded-sm focus:outline-none">
          <MdOutlineSearch size={22} className="text-gray-400 mr-2" />
          <input 
          
            type="text" 
            placeholder="Search for a country..."  
            className="border text-xs h-full w-full text-gray-400 rounded-sm border-none bg-white focus:outline-none" 
          />
        </div>


        <div>
        
        <Listbox value={selectedContinent} onChange={handleContinentChange}>
        

        <Listbox.Button className="border px-4 py-4 w-44 bg-white rounded-sm text-gray-800 text-xs shadow-md focus:outline-none flex justify-between">
    {selectedContinent.name}
    <MdKeyboardArrowDown size={18}/>
  </Listbox.Button>          
  <Listbox.Options className="absolute z-10 mt-2 py-4 px-4 w-44 bg-white text-gray-800 text-xs border rounded-sm shadow-md cursor-pointer">
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


        <div className="grid grid-cols-4 gap-16 mt-10 mx-20">
        {filteredCountries.map((country, index) => (
            <NavLink key={index} to={`/countries/${country.name}`}>
            <div className="bg-white rounded-lg shadow-md cursor-pointer h-full">
              <img src={country.flag} alt={country.name} className="w-full h-3/5 mb-2" />
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
  </>

  );
}

export default Dashboard;
