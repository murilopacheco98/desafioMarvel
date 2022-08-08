/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
// import { type } from 'os';
import { marvel } from '../../../services'

// 1 - DEFINIR QUAL O MOLDE DE DADOS QUE ESTARÁ SENDO GRAVADO NA STORE DO REDUX
// export interface Character {
//   id: string;
//   name?: string;
//   thumbnail?: {
//     path?: string;
//     extension: string;
//   };
//   description?: string;
// }
export interface Storie {
  id: string;
  image: string;
  name: string;
  // description: string;
  series: { available: number };
  stories: { available: number };
  events: { available: number };
  comics: { available: number };
};

// 2 - CRIAR UM ADAPTER PARA O MOLDE DE DADOS
const adapter = createEntityAdapter<Storie>({
  selectId: (storie) => storie.id,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.stories
);

export const getAll = createAsyncThunk('getAllStories', async () => {
  const response = await marvel.get('/stories');
  
  const response2 = JSON.parse(response.data)
  
  return response2.data.results

});

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
        console.log('DEU ERRO');
      })
      
  },
});

export const { addOne, addMany, updateOne, setAll, upsertOne } = storiesSlice.actions;
export default storiesSlice.reducer;