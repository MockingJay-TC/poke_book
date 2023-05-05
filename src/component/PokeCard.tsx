import { PokeMonDetail } from "../Interfaces/interfaces";
const PokeCard = ({ poke }: { poke: PokeMonDetail }) => {
  return (
    <div className="text-black text-2xl">
      {poke.name} {poke.height}
    </div>
  );
};

export default PokeCard;
