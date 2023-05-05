import { useEffect } from "react";
import SearchBar from "../component/SearchBar";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchPokemons } from "../feature/pokemon/pokemonSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const pokemons = useAppSelector((state) => state.pokemons.pokemons);
  console.log(pokemons);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blend-multiply px-8 py-8">
      <div className="flex flex-col items-center">
        {/* Poke Cover Image */}
        <div className="flex items-center justify-center">
          <img
            src="assets/images/pokeCover.svg"
            alt="Poke Cover"
            className="w-2/3 lg:w-full"
          />
        </div>
        <h1 className="font-clash font-semibold text-center mt-6 mb-2 text-3xl lg:text-5xl text-black">
          Poké <span className="text-primary">book</span>
        </h1>
        <h3 className="text-center font-general max-w-xs lg:max-w-sm text-sm lg:text-lg font-normal">
          Largest Pokémon index with information about every Pokemon you can
          think of.
        </h3>
        <SearchBar />
        <a
          href="/listview"
          className="font-general lg:text-lg text-black font-medium underline"
        >
          View all
        </a>
      </div>
    </div>
  );
};

export default Home;
