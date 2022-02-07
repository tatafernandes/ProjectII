import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </>
  );
};

export default App;