import { PokeMonDetail } from "../Interfaces/interfaces";
import PokeCard from "../component/PokeCard";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { fetchPokemon } from "../feature/pokemon/pokemonSlice";

const List = () => {
  const dispatch = useAppDispatch();
  const { pokemons, loading } = useAppSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(fetchPokemon(pokemons));
  }, []);
  return (
    <div className="w-full h-full py-32 px-52">
      {loading ? (
        <div>LOADING....</div>
      ) : (
        <div className="grid grid-cols-4 gap-x-8 gap-y-20">
          {pokemons.map((pokemon: PokeMonDetail) => {
            return <PokeCard key={pokemon.name} poke={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
};

export default List;
