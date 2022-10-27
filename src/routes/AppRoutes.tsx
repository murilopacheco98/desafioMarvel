import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Options } from '../pages/options/Options';
import { Characters } from '../pages/characters/Characters';
import { Comics } from '../pages/comics/Comics';
import { CharactersSearch } from '../pages/characters/SearchCharacters';
import { NameCharacters } from '../pages/characters/NameCharacters';
import { ComicsSearch } from '../pages/comics/SearchComics';
import { NameComics } from '../pages/comics/NameComics';
import { Creators } from '../pages/creators/Creators';
import { CreatorsSearch } from '../pages/creators/SearchCreators';
import { NameCreators } from '../pages/creators/NameCreators';
import { Events } from '../pages/events/Events';
import { EventsSearch } from '../pages/events/SearchEvents';
import { NameEvents } from '../pages/events/NameEvents';
import { Series } from '../pages/series/Series';
import { NameStories } from '../pages/stories/NameStories';
import { Stories } from '../pages/stories/Stories';
import { StoriesSearch } from '../pages/stories/SearchStories';

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
          <Route
            path="/stories/page=:currentPage"
            element={<Stories />}
          />
           
          <Route
            path="/stories/search=:inputValue/page=:currentPage"
            element={<StoriesSearch />}
          />
          <Route
            path="/stories/search=/page=:currentPage"
            element={<Stories />}
          />
          <Route
            path="/stories/id=:id"
            element={<NameStories />}
          />
          <Route path="/creators" element={<Characters />} />
          <Route
            path="/creators/page=:currentPage"
            element={<Creators />}
          />
           
          <Route
            path="/creators/search=:inputValue/page=:currentPage"
            element={<CreatorsSearch />}
          />
          <Route
            path="/creators/search=/page=:currentPage"
            element={<Creators />}
          />
          <Route
            path="/creators/id=:id"
            element={<NameCreators />}
          />
          <Route path="/comics" element={<Comics />} />
          <Route
            path="/comics/page=:currentPage"
            element={<Comics />}
          />
           
          <Route
            path="/comics/search=:inputValue/page=:currentPage"
            element={<ComicsSearch />}
          />
          <Route
            path="/comics/search=/page=:currentPage"
            element={<Comics />}
          />
          <Route
            path="/comics/id=:id"
            element={<NameComics />}
          />
          <Route path="/events" element={<Characters />} />
          <Route
            path="/events/page=:currentPage"
            element={<Events />}
          />
          <Route
            path="/events/search=:inputValue/page=:currentPage"
            element={<EventsSearch />}
          />
          <Route
            path="/events/search=/page=:currentPage"
            element={<Events />}
          />
          <Route
            path="/events/id=:id"
            element={<NameEvents />}
          />
          <Route path="/series" element={<Series />} />
          {/* <Route path="/*" element={<NotFound />} /> */}

        </Routes>
      
    </BrowserRouter>
  );
};

export default AppRoutes;
