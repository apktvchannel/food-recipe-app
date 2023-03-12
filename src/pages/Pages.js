import React from "react";
import { Route, Routes } from "react-router-dom";

import Cuisine from "../pages/Cuisine";
import Home from "./Home";
import Searched from "../pages/Searched";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path="/food-recipe-app/" element={<Home />} />
      <Route path="/food-recipe-app/cuisine/:type" element={<Cuisine />} />
      <Route path="/food-recipe-app/searched/:search" element={<Searched />} />
      <Route path="/food-recipe-app/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;
