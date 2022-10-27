/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { marvel } from '../../../services';

export interface Character {
  id: string;
  image: string;
  name: string;
  description?: string;
  modified: string;
  thumbnail: { path: string; extension: string };
  resourceURI: string;
  series: { available: number; collectionURI: string; items: Array<string>; returned: number };
  stories: { available: number; collectionURI: string; items: Array<string>; returned: number };
  events: { available: number; collectionURI: string; items: Array<string>; returned: number };
  comics: { available: number; collectionURI: string; items: Array<string>; returned: number };
  urls: Array<string>;
}

// 2 - CRIAR UM ADAPTER PARA O MOLDE DE DADOS
const adapter = createEntityAdapter<Character>({
  selectId: (character) => character.id,
});

export const { selectAll, selectById, selectIds } = adapter.getSelectors(
  (state: any) => state.characters
);

type asyncProps = {
  limite: number;
  offset: number;
};

export const getAll = createAsyncThunk(
  'getAllCharacters',
  async (props: asyncProps) => {
    const response = await marvel.get(
      `/characters?limit=${props.limite}&offset=${props.offset}&`
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
  'getCharactersByName',
  async (props: asyncProps2) => {
    const response = await marvel.get(
      `/characters?nameStartsWith=${props.nameStartsWith}&limit=${props.limite}&offset=${props.offset}&`
    );
    const response2 = JSON.parse(response.data);
    return response2.data.results;
  }
);

type asyncProps3 = {
  id: string;
};

export const getById = createAsyncThunk(
  'getCharactersById',
  async (props: asyncProps3) => {
    const response = await marvel.get(
      `/characters/${props.id}?`
    );
    const response2 = JSON.parse(response.data);
    return response2.data.results;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: adapter.getInitialState({ loading: false }),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    setAll: adapter.setAll,
    removeAll: adapter.removeAll,
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
        state.loading = false;
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

export const { addOne, addMany, updateOne, setAll, upsertOne, removeAll } =
  charactersSlice.actions;
export default charactersSlice.reducer;
