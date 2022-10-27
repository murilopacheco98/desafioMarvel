import { combineReducers } from '@reduxjs/toolkit';

import characters from './characters/charactersSlice';
import comics from './comics/comicsSlice';
import creators from './creators/creatorsSlice';
import events from './events/eventsSlice';
import series from './series/seriesSlice';
import stories from './stories/storiesSlice';

export const rootReducer = combineReducers({
  characters,
  comics,
  creators,
  events,
  series,
  stories,
});
