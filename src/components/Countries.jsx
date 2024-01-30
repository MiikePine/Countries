import Header from "./Header";
import { useParams } from 'react-router-dom';
import data from '../database/data.json';
import { NavLink } from 'react-router-dom'; 




function Countries() {
    const { countryName } = useParams();

    const selectedCountry = data.find((country) => country.name === countryName);


  return (
    <>
    <div>
      <div className="shadow-md py-2">
      <Header/>
      </div>
      <div className="mt-10 ml-24 ">
                <NavLink to="/">
                    <button className="px-10 py-2 shadow-sm shadow-gray-600 text-xs rounded-md">Back</button>
                </NavLink>      
                </div>
<div className="flex align-middle w-full mt-24">
      <div className=" justify-between  align-middle w-1/2">
        <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-full h-3/5 mb-2" />
      </div>
      <div>
        <div>
            <p className="font-bold text-2xl py-1 mt-10 mb-6">{selectedCountry.name}</p>
        </div>

        <div className="flex">
            <div className="w-1/2">
                <p><span className="font-semibold text-xs py-1 text-gray-700">Native Name:</span><span className='text-xs text-gray-500'> {selectedCountry.nativeName}</span></p>
                <p><span className="font-semibold text-xs py-1 text-gray-700">Population:</span><span className='text-xs text-gray-500'> {selectedCountry.population}</span></p>
                <p><span className="font-semibold text-xs py-1 text-gray-700">Sub Region:</span><span className='text-xs text-gray-500'> {selectedCountry.subregion}</span></p>
                <p><span className="font-semibold text-xs py-1 text-gray-700">Region:</span><span className='text-xs text-gray-500'> {selectedCountry.region}</span></p>
                <p><span className="font-semibold text-xs py-1 text-gray-700">Capital:</span><span className='text-xs text-gray-500'> {selectedCountry.capital}</span></p>
            </div>
            <div className="w-1/2">
            <p><span className="font-semibold text-xs py-1 text-gray-700">Top Level Domain:</span><span className='text-xs text-gray-500'> {selectedCountry.topLevelDomain}</span></p>
            <p><span className="font-semibold text-xs py-1 text-gray-700">Currencies:</span><span className='text-xs text-gray-500'> {selectedCountry.currencies[0].code}</span></p>
            <p>
    <span className="font-semibold text-xs py-1 text-gray-700">Languages:</span>
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

 
{/* <p>
    <span className="font-semibold text-xs py-1 text-gray-700">Border Countries:</span>
    <span className='text-xs text-gray-500'>
        {selectedCountry.borders.map((border, index) => {
            // Encontrar o país correspondente ao código de fronteira
            const borderCountry = data.find(country => country.alpha3Code === border);
            // Verificar se o país foi encontrado
            if (borderCountry) {
                // Renderizar o nome do país
                return (
                    <span key={index}>
                        {borderCountry.name}
                        {index < selectedCountry.borders.length - 1 && ', '}
                    </span>
                );
            } else {
                return null;
            }
        })}
    </span>
</p> */}
      </div>
      </div>
</div> 
      </div>

    </>
  );
}

export default Countries;
