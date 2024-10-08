

import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Firstpage from './Firstpage';
import Contacts from './Contacts';
import Seed from './Seed';
import ComboOffer from './ComboOffer';
import GardenTools from './GardenTools';
import AddtoCart from './AddtoCart';
import Loginpage from './Loginpage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/seed" element={<Seed />} />
        <Route path="/combo-offer" element={<ComboOffer />} />
        <Route path="/garden-tools" element={<GardenTools />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/cart" element={<AddtoCart />} />
      </Routes>
    </>
  );
}

export default App;