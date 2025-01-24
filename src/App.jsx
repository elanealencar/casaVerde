import './App.css'
import React from 'react';
import Header from './components/Header/Header.jsx';
import InitialSection from './components/InitialSection/InitialSection.jsx';
import PlantSection from './components/PlantSection/PlantSection.jsx';
import Offers from './components/Offers/Offers.jsx';


const App = () => {
  return (
      <div>
        <Header />
        <InitialSection />
        <PlantSection />
        <Offers />
      </div>
  );
};

export default App;
