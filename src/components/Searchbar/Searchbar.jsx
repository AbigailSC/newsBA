import { BiSearch } from 'react-icons/bi';

const Searchbar = () => {
  return (
    <form className="relative flex items-center gap-2">
      <BiSearch className="absolute right-0 text-3xl text-orange-600" />
      <input
        type="text"
        placeholder="Search"
        className="p-3 bg-transparent border-b-2 border-orange-600 focus:outline-none focus:border-b-2 focus:ring-0 focus:border-orange-600"
      />
    </form>
  );
};

export default Searchbar;
