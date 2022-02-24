import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import FoodsList from './pages/foods-list/FoodsList';
import FoodRecipe from './pages/food-recipe/FoodRecipe';
import Categories from './pages/categories/Categories';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/foods-list/:idList" element={ <FoodsList /> } />
        <Route exact path="/food-recipe/:idRecipe" element={ <FoodRecipe /> } />
        <Route exact path='/food-carousel' element={ <Categories /> } />
      </Routes>
    </>
  );
};

export default App;