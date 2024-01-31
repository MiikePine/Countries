
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import PropTypes from 'prop-types';

const continent = [
  { id: 1, name: 'Africa', unavailable: false },
  { id: 2, name: 'Europe', unavailable: false },
  { id: 3, name: 'Americas', unavailable: false },
  { id: 4, name: 'Asia', unavailable: false },
  { id: 5, name: 'Oceania', unavailable: false },
]

function List({ darkMode, handleContinentChange }) {
  const [selectedContinent, setSelectedContinent] = useState({ name: 'Filter by Continent' });


  
    return (
        <div>
        <Listbox value={selectedContinent} onChange={handleContinentChange}>
        <Listbox.Button className={`border px-4 py-4 w-44 rounded-sm text-xs shadow-md focus:outline-none flex justify-between ${darkMode ? 'text-white dark:bg-[#2b3945]' : 'text-gray-600 bg-white'}`}>
    {selectedContinent.name}
    <MdKeyboardArrowDown size={18}/>
  </Listbox.Button>          
  <Listbox.Options className={`absolute z-10 mt-2 py-4 px-4 w-44 bg-white text-gray-600 text-xs border rounded-sm shadow-md cursor-pointer ${darkMode ? 'text-white dark:bg-[#2b3945]' : 'text-gray-600 bg-white'}`}>
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
    );
  }

  List.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    handleContinentChange: PropTypes.func.isRequired
  };
  
  export default List;