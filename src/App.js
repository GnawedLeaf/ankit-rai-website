import logo from './logo.svg';
import './App.css';
import Homepage from './pages/HomePage/HomePageIndex';
import Navbar from './components/Navbar/NavbarIndex';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import ContactPage from './pages/ContactPage/ContactPageIndex';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
