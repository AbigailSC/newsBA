import { useEffect } from 'react';
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';

import { getTotalPages } from '@utils';

const Paginate = ({ length, currentPage, onChangePage }) => {
  const totalItems = getTotalPages(length, 10);
  const totalPagesArray = Array.from(
    { length: totalItems },
    (_, index) => index + 1
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPagesArray.length) {
      onChangePage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between w-full gap-2 px-5 lg:justify-center">
      <button
        onClick={() => handlePrevPage()}
        className={`px-5 py-2 text-orange-500 transition-all rounded-sm hover:text-zinc-200 bg-[#101010] ${
          currentPage === 1 && 'text-zinc-400 bg-zinc-800 cursor-not-allowed'
        }`}
      >
        <BiSolidLeftArrow className="hidden lg:block" />
        <span className="lg:hidden">Most recent</span>
      </button>
      <ul className="hidden gap-2 lg:flex">
        {totalPagesArray.map((page) => (
          <button
            key={page}
            onClick={() => onChangePage(page)}
            className="px-5 py-2 font-semibold text-orange-500 transition-all rounded-sm focus:bg-zinc-900 hover:text-zinc-200 bg-[#101010] "
          >
            {page}
          </button>
        ))}
      </ul>
      <button
        onClick={() => handleNextPage()}
        className={`px-5 py-2 text-orange-500 transition-all rounded-sm hover:text-zinc-200 bg-[#101010] ${
          currentPage === totalItems &&
          'text-zinc-400 bg-zinc-800 cursor-not-allowed'
        }`}
      >
        <BiSolidRightArrow className="hidden lg:block" />
        <span className="lg:hidden">Older</span>
      </button>
    </div>
  );
};

export default Paginate;
