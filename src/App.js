
// import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Login from './Pages/Login';

import {
  Routes,
  Route,
} from 'react-router-dom';
import ProtectRoute from './ProtectRoute';
import Navbar from './Pages/Navbar';


function App() {

  return (
    <div >
      <Routes>  
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectRoute/>}>
            <Route path='/*' element={<Navbar /> } >
            
            </Route>
            <Route path='home' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            </Route>
      </Routes>

    </div>
  );
}

export default App;
