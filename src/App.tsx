import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ImageGeneration } from './pages/image-generation/ImageGeneration';
import { NavBar } from './components/navBar/NavBar';

const App = () =>  {
  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<ImageGeneration />}>
          </Route>
        </Routes>
    </>
  );
}

export default App;
