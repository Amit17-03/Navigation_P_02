// import React from 'react';
import './App.css';
import Contactfrom from './component/ContactFrom/Contactfrom';
import Navigation from './component/Navigation';
import ContactHeader from './component/contactHeader/ContactHeader';



function App() {
  return (
  <div>
         <Navigation/>
         <ContactHeader/>
         <Contactfrom/>
  </div>
  );
};
export default App;