import './App.css';
import { Routes, Route, useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countryData from './countries.json';


function App() {
  const [country, setCountry] = useState(countryData);
  
  return (
    <div className="App">
    <Navbar />

    <div className="container">
      <div className="row">
      
      <Routes>
      <Route path="/" element={<CountriesList countries={country} />} />
      <Route path="/:id" element={ <CountryDetails /> } />
      </Routes>
    </div>
  </div>
</div>
  );
}

export default App;
