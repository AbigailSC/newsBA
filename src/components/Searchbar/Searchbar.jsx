import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

import { selectSearchedNews } from '@redux/slices/news';

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== '') {
      dispatch(selectSearchedNews(search));
      navigate(`/search/${search}`);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className="relative flex items-center gap-2"
    >
      <BiSearch className="absolute right-0 text-3xl text-orange-500" />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleInputChange(e)}
        className="p-3 bg-transparent border-b-2 border-orange-500 focus:outline-none focus:border-b-2 focus:ring-0 focus:border-orange-500"
      />
    </form>
  );
};

export default Searchbar;
