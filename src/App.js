import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import FoodsList from './components/foods-list/FoodsList';
import FoodRecipe from './components/food-recipe/FoodRecipe';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/foods-list/:idList" element={ <FoodsList /> } />
        <Route exact path="/food-recipe/:idRecipe" element={ <FoodRecipe /> } />
      </Routes>
    </>
  );
};

export default App;