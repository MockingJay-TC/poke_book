import { PokeMonDetail } from "../Interfaces/interfaces";
import PokeCard from "../component/PokeCard";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useContext, useEffect } from "react";
import { fetchPokemon } from "../feature/pokemon/pokemonSlice";
import { PokeContext } from "../context/Context";

const List = () => {
  const { pokeSearch } = useContext(PokeContext);
  const dispatch = useAppDispatch();
  const { pokemons, loading } = useAppSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(fetchPokemon(pokemons));
  }, []);
  return (
    <div className="w-full h-full py-24 lg:py-32 px-12 lg:px-52 4xl:px-[30rem] ">
      <div className="absolute w-full h-full inset-0 bg-noise opacity-5 -z-10" />

      {loading ? (
        <div>LOADING....</div>
      ) : (
        <div className="flex flex-col gap-y-16 md:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-8  2xl:gap-y-20">
          {pokemons
            .filter((pokemon: PokeMonDetail) => {
              if (pokeSearch === "") {
                return <PokeCard key={pokemon.name} poke={pokemon} />;
              } else if (
                pokemon.name.toLowerCase().includes(pokeSearch.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .map((pokemon: PokeMonDetail) => {
              return <PokeCard key={pokemon.name} poke={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default List;
