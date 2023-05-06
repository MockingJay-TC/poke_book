const Stat = ({ stat }: { stat: any }) => {
  return (
    <div className="w-full grid grid-cols-2 space-x-8 my-2">
      <h2 className="text-right">{stat.stat.name}</h2>
      <h2 className="text-left font-semibold flex items-center gap-6">
        <progress
          className="progress progress-primary  bg-black/10 w-72"
          value={stat.base_stat}
          max="100"
        ></progress>
        <span className="text-normal font-semibold">{stat.base_stat}</span>
      </h2>
    </div>
  );
};

export default Stat;
