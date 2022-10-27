/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { marvel } from '../../../services'

export interface Storie {
  id: string;
  digitalId: string;
  title: string;
  issueNumber: string;
  variantDescription: string;
  description: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  textObjects: { type: string; language: string; text: string; resourceURI: string; };
  urls: { type: string; url: string };
  series: { resourceURI: string; name: string; }
  variants: Array<string>; 
  collections: Array<string>; 
  collectedIssues: Array<string>;
  dates: { 0: { type: number; date: string; }; 1: { type: number; date: string; }; };
  prices: { type: string; price: number; };
  thumbnail: {path: string; extension: string; };
  images: Array<string>;
  creators: { available: number; collectionURI: string; items: Array<string>; returned: number };
  caracters: { available: number; collectionURI: string; items: Array<string>; returned: number };
  stories: { available: number; collectionURI: string; items: Array<string>; returned: number };
  events: { available: number; collectionURI: string; items: Array<string>; returned: number };
}

const adapter = createEntityAdapter<Storie>({
  selectId: (storie) => storie.id,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.stories
);

type asyncProps = {
  limite: number;
  offset: number;
};

export const getAll = createAsyncThunk(
  'getAllSeries',
  async (props: asyncProps) => {
    const response = await marvel.get(
      `/series?limit=${props.limite}&offset=${props.offset}&orderBy=title&`
    );
    const response2 = JSON.parse(response.data);
    return response2.data.results;
  }
);

type asyncProps2 = {
  nameStartsWith: string;
  limite: number;
  offset: number;
};

export const getByName = createAsyncThunk(
  'getStoriesByName',
  async (props: asyncProps2) => {
    const response = await marvel.get(
      `/stories?titleStartsWith=${props.nameStartsWith}&limit=${props.limite}&offset=${props.offset}&`
    );
    const response2 = JSON.parse(response.data);
    return response2.data.results;
  }
);

const storiesSlice = createSlice({
  name: 'stories',
  initialState: adapter.getInitialState({ loading: false }),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    setAll: adapter.setAll,
    upsertOne: adapter.upsertOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(getAll.rejected, (state) => {
        state.loading = false
      })
      .addCase(getByName.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByName.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(getByName.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addOne, addMany, updateOne, setAll, upsertOne } = storiesSlice.actions;
export default storiesSlice.reducer;