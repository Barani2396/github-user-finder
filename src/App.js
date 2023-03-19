import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import Home from './components/pages/Home';

import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <AlertState>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Alert />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AlertState>
  );
};

export default App;
