import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
