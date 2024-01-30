import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Countries from './components/Countries'; 
// import Header from "./Header";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/countries/:countryName" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
