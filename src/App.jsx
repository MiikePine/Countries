import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Countries from './components/Countries';
import Header from "./components/Header"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark' : ''}>
        <Header className={`${darkMode ? 'text-white dark:bg-[#202c37]' : 'text-gray-600 bg-gray-100'}`} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Dashboard darkMode={darkMode} />} />
          <Route path="/countries/:countryName" element={<Countries darkMode={darkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
