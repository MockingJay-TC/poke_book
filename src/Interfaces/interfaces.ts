export interface PokeMon {
    name: string;
    url: string;
}

export interface PokeMonDetail { 

}

export interface PokemonState {
  loading: boolean;
  pokemons: PokeMon[];
  error: string | undefined;
}
