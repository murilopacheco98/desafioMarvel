import { combineReducers } from '@reduxjs/toolkit';

import characters from './characters/charactersSlice';
import comics from './comics/comicsSlice';
import auxiliar from './auxiliar/auxiliarSlice';

export const rootReducer = combineReducers({
  characters,
  comics,
  auxiliar
  // series,
  // events,
  // creators,
  // stories
});
