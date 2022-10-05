import React from 'react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
// import LayoutDefault from '../config/layout/Default';
import { Home } from '../pages/home/Home';
import { Options } from '../pages/options/Options';
import { Characters } from '../pages/characters/Characters';
import { Comics } from '../pages/comics/Comics';
import { CharactersSearch } from '../pages/characters/SearchCharacters';
import { NameCharacters } from '../pages/characters/NameCharacters';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/options" element={<Options />} />
          <Route path="/characters" element={<Characters />} />
          <Route
            path="/characters/page=:currentPage"
            element={<Characters />}
          />
           {/* <Route
            path="/characters/search=:inputValue"
            element={<CharactersSearch />}
          /> */}
          <Route
            path="/characters/search=:inputValue/page=:currentPage"
            element={<CharactersSearch />}
          />
          {/* <Route
            path="/characters/search="
            element={<Characters />}
          /> */}
          <Route
            path="/characters/search=/page=:currentPage"
            element={<Characters />}
          />
          <Route
            path="/characters/id=:id"
            element={<NameCharacters />}
          />
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
