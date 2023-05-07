import { PokeMonDetail } from "../Interfaces/interfaces";
import GradLine from "./GradLine";
import Stat from "./Stat";

const Stats = ({ poke }: { poke: PokeMonDetail }) => {
  return (
    <div className="my-4 font-clash text-xl w-full flex flex-col items-center">
      <div className="w-full">
        {poke.stats.map((stat: any, index: number) => {
          return (
            <div key={index}>
              <Stat stat={stat} />
              <GradLine />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
