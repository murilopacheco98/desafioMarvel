/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { marvel } from '../../../services'

export interface Creator {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: string;
  thumbnail: {path: string; extension: string; };
  resourceURI: string;
  comics: { available: number; collectionURI: string; items: Array<string>; returned: number };
  caracters: { available: number; collectionURI: string; items: Array<string>; returned: number };
  stories: { available: number; collectionURI: string; items: Array<string>; returned: number };
  events: { available: number; collectionURI: string; items: Array<string>; returned: number };
}

const adapter = createEntityAdapter<Creator>({
  selectId: (creator) => creator.id,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.comics
);

type asyncProps = {
  limite: number;
  offset: number;
};

export const getAll = createAsyncThunk(
  'getAllCreators',
  async (props: asyncProps) => {
    const response = await marvel.get(
      `/creators?limit=${props.limite}&offset=${props.offset}&`
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
  'getCreatorsByName',
  async (props: asyncProps2) => {
    const response = await marvel.get(
      `/creators?titleStartsWith=${props.nameStartsWith}&limit=${props.limite}&offset=${props.offset}&`
    );
    const response2 = JSON.parse(response.data);
    return response2.data.results;
  }
);

const creatorsSlice = createSlice({
  name: 'creators',
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

export const { addOne, addMany, updateOne, setAll, upsertOne } = creatorsSlice.actions;
export default creatorsSlice.reducer;