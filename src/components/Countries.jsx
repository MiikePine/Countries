import Header from "./Header";
import { useParams } from 'react-router-dom';
import data from '../database/data.json';
import { NavLink } from 'react-router-dom'; 
import { IoIosArrowRoundBack } from "react-icons/io";




function Countries(darkMode, toggleDarkMode) {
    const { countryName } = useParams();

    const selectedCountry = data.find((country) => country.name === countryName);


  return (
    <>
    <div className={`h-screen countries ${darkMode ? 'text-white dark:bg-[#202c37]' : 'text-gray-600 bg-gray-100'}`}>
      
      <div className="pt-10 ml-10">
      <NavLink to="/">
  <button className="flex px-6 py-2  shadow-sm shadow-gray-400 text-gray-500 text-xs rounded-md items-center">
    <IoIosArrowRoundBack  size={22} className="mr-2"/> Back
  </button>
</NavLink>   
                </div>
<div className="flex  w-full mt-24">
      <div className="flex items-center justify-center align-middle w-1/2">
        <img src={selectedCountry.flag} alt={selectedCountry.name}     className="w-full h-auto mb-2 max-w-lg"/>
      </div>
      <div>
        <div>
            <p className="font-bold text-2xl py-1 pt-10 mb-6">{selectedCountry.name}</p>
        </div>

        <div className="flex justify-between">
            <div className="w-1/2">
            <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Native Name:</span><span className='text-xs text-gray-500'> {selectedCountry.nativeName}</span></p>
                <p><span className={`font-semibold text-xs text-gray-700  py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Population:</span><span className='text-xs text-gray-500'> {selectedCountry.population}</span></p>
                <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Sub Region:</span><span className='text-xs text-gray-500'> {selectedCountry.subregion}</span></p>
                <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Region:</span><span className='text-xs text-gray-500'> {selectedCountry.region}</span></p>
                <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Capital:</span><span className='text-xs text-gray-500'> {selectedCountry.capital}</span></p>
            </div>

            <div className="ml-20 w-1/2">
            <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Top Level Domain:</span><span className='text-xs text-gray-500'> {selectedCountry.topLevelDomain}</span></p>
            <p><span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Currencies:</span><span className='text-xs text-gray-500'> {selectedCountry.currencies[0].code}</span></p>
            <p>
    <span className={`font-semibold text-xs py-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Languages: </span>
    <span className='text-xs text-gray-500'>
        {selectedCountry.languages && selectedCountry.languages.map((language, index) => (
            <span key={index}>
                {language.name}
                {index < selectedCountry.languages.length - 1 && ', '}
            </span>
        ))}
    </span>
</p>
            </div >
      </div>

      <div>


      </div>
      </div>
</div> 
      </div>

    </>
  );
}

export default Countries;
