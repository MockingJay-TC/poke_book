import { PokeMonDetail } from "../Interfaces/interfaces";
const PokeCard = ({ poke }: { poke: PokeMonDetail }) => {
  return (
    <div
      key={poke.name}
      className="text-black text-2xl shadow-md flex justify-center p-3 text-center bg-white rounded-2xl h-80"
    >
      <div className="w-full ">
        <div className="bg-dark rounded-2xl flex justify-center items-center h-3/5 pb-8 relative">
          <img
            src={poke.sprites?.other?.dream_world.front_default}
            alt="Pokeman"
            className="h-52 w-full absolute -top-16"
          />
        </div>
        <h2 className="font-clash text-2xl font-medium my-4">{poke.name}</h2>
        <div className="my-8 flex ">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
