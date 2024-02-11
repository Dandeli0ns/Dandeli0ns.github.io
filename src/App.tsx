import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ImageGeneration } from './pages/image-generation/ImageGeneration';
import { NavBar } from './components/navBar/NavBar';
import { LegalFooter } from './components/footer/Footer';

const App = () =>  {
  return (
    <div className='flex flex-col h-screen bg-white dark:bg-gray-900'>
    <NavBar />
    <Routes>
      <Route path="/" element={<ImageGeneration />}>
      </Route>
    </Routes>
    <LegalFooter />
    </div>
  );
}

export default App;
