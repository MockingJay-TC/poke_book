import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter pokeman name"
        className="lg:text-2xl w-4/5 lg:w-3/4 focus:outline-none"
      />
      <div className="cursor-pointer hover:shadow-2xl w-10 h-10 lg:w-12 lg:h-12 m-1 lg:m-2 bg-primary rounded-full lg:shadow-md flex justify-center items-center">
        <MagnifyingGlassIcon className="w-5 text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
