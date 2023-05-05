import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PokemonState } from "../../Interfaces/interfaces";

const initialState: PokemonState = {
  loading: false,
  pokemons: [],
  error: "",
};

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async () => {
    const response = await axios.get(`${import.meta.env.VITE_POKEAPI}/pokemon`);
    console.log(response.data.results);
    return response.data.results;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.loading = false;
      state.pokemons = [];
      state.error = action.error.message;
    });
  },
});

export default pokemonSlice.reducer;
