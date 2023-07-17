import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft, BiSolidUser, BiX, BiSearch } from 'react-icons/bi';

import categories from '@data/categories.json';
import { Searchbar, Authentication } from '@components';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
    setShowUser(false);
  };

  const handleShowSearchbar = () => {
    setShowMenu(false);
    setShowUser(false);
    setShowSearchbar(!showSearchbar);
  };

  const closeSearchbar = () => {
    setShowSearchbar(false);
  };

  const handleShowUser = () => {
    setShowUser(!showUser);
    setShowMenu(false);
  };

  return (
    <nav
      className={`z-20 fixed bg-[#101010] w-full h-20 flex ${
        showMenu ? 'h-screen lg:h-20' : null
      }`}
    >
      <div className="flex flex-col items-center justify-start w-full px-5 border-b border-zinc-700 lg:mx-0 lg:items-start">
        <div className="relative flex justify-between w-full h-20 md:px-10 lg:px-20 2xl:px-0 2xl:max-w-screen-xl 2xl:self-center">
          <div className="flex justify-start w-20 h-20 gap-5">
            <button onClick={() => handleShowMenu()}>
              <BiMenuAltLeft className="text-2xl transition-all lg:text-4xl hover:text-orange-500" />
            </button>
            <button onClick={() => handleShowSearchbar()}>
              <BiSearch className="text-xl transition-all lg:hidden hover:text-orange-500" />
            </button>
          </div>
          <button onClick={() => handleShowUser()}>
            <BiSolidUser className="text-xl transition-all lg:text-3xl hover:text-orange-500" />
          </button>
          {showUser && <Authentication />}
        </div>
        <div
          className={`w-full lg:left-0 lg:flex-col lg:gap-5 lg:items-end lg:bg-neutral-800 lg:min-h-screen lg:w-1/3 2xl:w-1/5 lg:absolute lg:top-0 lg:p-10 h-full ${
            showMenu ? 'flex' : 'hidden'
          }`}
        >
          <div className="hidden lg:flex lg:w-full lg:justify-between">
            <button onClick={() => handleShowSearchbar()}>
              <BiSearch className="text-xl transition-all lg:text-3xl hover:text-orange-500" />
            </button>
            <button onClick={() => handleShowMenu()}>
              <BiX className="text-2xl lg:text-4xl hover:text-orange-500" />
            </button>
          </div>
          <ul className="flex flex-col justify-start w-full h-full gap-y-1 md:px-10 lg:px-0">
            {categories.map((item, index) => (
              <li
                key={index}
                className="py-5 text-xl font-medium transition-all cursor-pointer text-start hover:text-orange-500"
              >
                <Link to={item.url}>{item.name.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </div>
        {showSearchbar && (
          <div className="absolute top-0 left-0 z-30 flex flex-col items-end w-screen h-screen p-5 bg-gray-800 md:p-20 bg-opacity-80 backdrop-blur-sm">
            <button
              className="h-[10%] flex items-start"
              onClick={() => closeSearchbar()}
            >
              <BiX className="text-3xl transition-all lg:text-5xl min-h-min hover:text-orange-500" />
            </button>
            <div className="flex justify-center w-full h-[90%]">
              <Searchbar hidden={showSearchbar} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
