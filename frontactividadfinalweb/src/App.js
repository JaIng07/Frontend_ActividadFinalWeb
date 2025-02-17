import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchCars from "./pages/SearchCars";
import RentForm from "./components/RentForm";
import RentSummary from "./components/RentSummary";
import CarForm from "./components/CarForm.jsx";
import ClientForm from "./components/ClientForm";
import CarList from "./components/CarList";
import ClientList from "./components/ClientList";
import RentList from "./components/RentList";

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cars-list' element={<CarList/>} />
            <Route path='/clients-list' element={<ClientList/>} />
            <Route path='/rents-list' element={<RentList/>} />
            <Route path='/search-cars' element={<SearchCars/>} />
            <Route path='/rent-form' element={<RentForm />} />
            <Route path='rent-summary' element={<RentSummary />} />
            <Route path='create-car' element={<CarForm />} />
            <Route path='create-client' element={<ClientForm />} />

        </Routes>
      </Router>
  );
}

export default App;
