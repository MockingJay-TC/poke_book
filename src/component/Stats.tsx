import { PokeMonDetail } from "../Interfaces/interfaces";
import GradLine from "./GradLine";

const Stats = ({ poke }: { poke: PokeMonDetail }) => {
  return (
    <div className="my-4 font-clash text-xl w-full flex flex-col items-center">
      <div>
        {poke.stats.map((stat: any) => {
          return (
            <>
              <div className="w-full grid grid-cols-2 space-x-8 my-2">
                <h2 className="text-right">{stat.stat.name}</h2>
                <h2 className="text-left font-semibold flex items-center gap-6">
                  <progress
                    className="progress progress-primary  bg-black/10 w-72"
                    value={stat.base_stat}
                    max="100"
                  ></progress>
                  <span className="text-normal font-semibold">
                    {stat.base_stat}
                  </span>
                </h2>
              </div>
              <GradLine />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
