import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import PaginationState from './context/pagination/PaginationState';
import AlertState from './context/alert/AlertState';
import ScrollState from './context/scroll/scrollState';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/users/User';
import Notfound from './components/pages/NotFound';
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <PaginationState>
        <AlertState>
          <ScrollState>
            <BrowserRouter>
              <div className='App'>
                <Navbar />
                <Alert />
                <div className='container'>
                  <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/About' element={<About />} />
                    <Route exact path='user/:loginName' element={<User />} />
                    <Route path='*' element={<Notfound />} />
                  </Routes>
                </div>
              </div>
            </BrowserRouter>
          </ScrollState>
        </AlertState>
      </PaginationState>
    </GithubState>
  );
};

export default App;
