import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import FoodsList from './components/foods-list/FoodsList';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/main-course" element={ <FoodsList /> } />
        <Route exact path="/dessert" element={ <FoodsList /> } />
      </Routes>
    </>
  );
};

export default App;