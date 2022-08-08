import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LayoutDefault from '../config/layout/Default';
import { Home } from '../pages/home/Home';
import { Options } from '../pages/options/Options'
import { Characters } from '../pages/characters/Characters';
import { Comics } from '../pages/comics/Comics'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<Options />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/stories" element={<Characters />} />
        <Route path="/creators" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/events" element={<Characters />} />
        <Route path="/series" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
