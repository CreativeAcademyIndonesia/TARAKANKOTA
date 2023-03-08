import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import ProfilePage from './pages/Profile';
import Contact from './pages/Contact';
import Galeri from './pages/Galeri';
import Mekanisme from './pages/Mekanisme';
import Pelayanan from './pages/Pelayanan';
import FormPengajuan from './pages/FormPengajuan';
import DetailsBlog from './pages/DetailsBlog';
import Admin from './pages/Admin';
import React from 'react';

function App() {
  return (
    <>
      <Router>
        <Navigation />
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/profile' element={<ProfilePage />}></Route>
            <Route path='/pelayanan' element={<Pelayanan />}></Route>
            <Route path='/galeri' element={<Galeri />}></Route>
            <Route path='/galeri/:id' element={<DetailsBlog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/mekanisme' element={<Mekanisme />}></Route>
            <Route path='/formpengajuan' element={<FormPengajuan />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
