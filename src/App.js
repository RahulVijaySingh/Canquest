
import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Home2 from './pages/Home2';
import AddressAutocomplete from './pages/AddressAutocomplete';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddressAutocomplete />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home2' element={<Home2 />} />
      </Routes>

    </>
  );
}

export default App;
