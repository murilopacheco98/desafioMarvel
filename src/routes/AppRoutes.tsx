import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LayoutDefault from '../config/layout/Default';
import { Home } from '../pages/home/Home';
import { Options } from '../pages/options/Options'
import { Characters } from '../pages/characters/Characters';


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<Options />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
