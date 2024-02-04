import Header from "./Header";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import data from '../database/data.json';
import { NavLink } from 'react-router-dom'; 
import { IoIosArrowRoundBack } from "react-icons/io";
import PropTypes from 'prop-types';




function Countries({darkMode, toggleDarkMode}) {
    const { countryName } = useParams();

    const [selectedCountry, setSelectedCountry] = useState(null);


    useEffect(() => {
      const fetchCountryData = async () => {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
          const data = await response.json();
          console.log(" countries api",data); // Log dos dados retornados pela API para o país selecionado
          setSelectedCountry(data[0]); // Defina o país selecionado com os dados retornados
        } catch (error) {
          console.error('Error fetching country data:', error);
        }
      };
    
      fetchCountryData();
    }, [countryName]);

  return (
    <>
    <div className={`h-screen countries ${darkMode ? 'text-white dark:bg-[#202c37]' : 'text-gray-600 bg-gray-100'}`}>
      
      <div className="pt-10 ml-10 ">
      <NavLink to="/">
      <button className={`flex px-6 py-2 shadow-sm shadow-gray-400 text-xs rounded-md items-center 
  ${darkMode ? 'text-white bg-[#2b3945]' : 'text-gray-700 bg-gray-100'}`}>
    <IoIosArrowRoundBack size={22} className="mr-2"/>
    Back
</button>
</NavLink>   
                </div>
                {selectedCountry && (
<div className="md:flex  w-full mt-24">
      <div className=" flex items-center justify-center align-middle mx-10 md:mx-0  md:w-1/2">
      <img src={selectedCountry.flags && selectedCountry.flags.png} alt={selectedCountry.name && selectedCountry.name.common} className="w-full h-auto mb-2 max-w-sm md:max-w-lg" />
      </div>
      <div>
        <div>
            <p className="font-bold text-2xl py-1 pt-10 mx-10 md:mx-0  mb-6">{selectedCountry.name.common}</p>
        </div>

        <div className="mx-10 md:mx-0 md:flex justify-between">
            <div className="w-1/2">
            <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Native Name:</span><span className='text-xs text-gray-500'> {selectedCountry.nativeName}</span></p>
                <p><span className={`font-semibold text-xs text-gray-700  py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Population:</span><span className='text-xs text-gray-500'> {selectedCountry.population}</span></p>
                <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Sub Region:</span><span className='text-xs text-gray-500'> {selectedCountry.subregion}</span></p>
                <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Region:</span><span className='text-xs text-gray-500'> {selectedCountry.region}</span></p>
                <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Capital:</span><span className='text-xs text-gray-500'> {selectedCountry.capital}</span></p>
                <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Capital:</span><span className='text-xs text-gray-500'> {selectedCountry.capital}</span></p>

            </div>

            <div className=" md:mx-0 md:ml-20 w-1/2">
            <div>
 
</div>            <p>
  <span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
    Currencies:
  </span>
  <span className='text-xs text-gray-500'>
    {Object.keys(selectedCountry.currencies).map(currencyCode => (
      <span key={currencyCode}>
        {selectedCountry.currencies[currencyCode].name} ({selectedCountry.currencies[currencyCode].symbol})
      </span>
    ))}
  </span>
</p>      

{selectedCountry.languages && typeof selectedCountry.languages === 'object' && (
  <p>
    <span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Languages: </span>
    <span className='text-xs text-gray-500'>
      {Object.keys(selectedCountry.languages).map((languageCode, index) => (
        <span key={index}>
          {selectedCountry.languages[languageCode]}
          {index < Object.keys(selectedCountry.languages).length - 1 && ', '}
        </span>
      ))}
    </span>
  </p>
)}

            </div >
      </div>

      <div>


      </div>
      </div>
</div> 
                )}
      </div>

    </>
  );
}

Countries.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};


export default Countries;
