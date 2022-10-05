/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  // PayloadAction,
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

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.characters
);

type asyncProps = {
  limite: number;
  offset: number;
};

export const getAllAuxiliar = createAsyncThunk(
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

export const getByNameAuxiliar = createAsyncThunk(
  'getCharactersByName',
  async (props: asyncProps2) => {
    const response = await marvel.get(
      `/characters?nameStartsWith=${props.nameStartsWith}&limit=${props.limite}&offset=${props.offset}&`
    );
    const response2 = JSON.parse(response.data);
    return response2.data.results;
  }
);

// type asyncProps3 = {
//   id: string;
// };
// 
// export const getByIdAuxiliar = createAsyncThunk(
//   'getCharactersById',
//   async (props: asyncProps3) => {
//     const response = await marvel.get(
//       `/characters/${props.id}?`
//     );
//     const response2 = JSON.parse(response.data);
//     return response2.data.results;
//   }
// );

const auxiliarSlice = createSlice({
  name: 'auxiliar',
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
      .addCase(getAllAuxiliar.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAuxiliar.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
        // state.entities.push(action.payload);
        state.loading = false;
      })
      .addCase(getAllAuxiliar.rejected, (state) => {
        state.loading = false;
        console.log('DEU ERRO');
      })
      .addCase(getByNameAuxiliar.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByNameAuxiliar.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
        // state.entities.push(action.payload);
        state.loading = false;
      })
      .addCase(getByNameAuxiliar.rejected, (state) => {
        state.loading = false;
        console.log('DEU ERRO');
      });
  },
});

export const { addOne, addMany, updateOne, setAll, upsertOne, removeAll } =
  auxiliarSlice.actions;
export default auxiliarSlice.reducer;