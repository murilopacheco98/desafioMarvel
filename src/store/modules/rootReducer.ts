import { combineReducers } from '@reduxjs/toolkit';

import characters from './characters/charactersSlice';
import comics from './comics/comicsSlice'

export const rootReducer = combineReducers({
  characters,
  comics,
  // series,
  // events,
  // creators,
  // stories
});
