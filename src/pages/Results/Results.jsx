import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

import { Latest } from '@components';
import { clearSearchedNews } from '@redux/slices/news';

const Results = () => {
  const dispatch = useDispatch();
  const { searchedNews } = useSelector((state) => state.newsState);
  const { search } = useParams();

  useEffect(() => {
    return () => {
      if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
        dispatch(clearSearchedNews());
      }
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-20 pb-10 xl:w-full lg:pb-20 lg:min-h-[80vh]">
      <div className="bg-[#101010] w-full px-5 flex flex-col items-center justify-center py-10 h-36">
        <span className="flex items-center gap-1 text-zinc-400">
          <BiSearch className="text-xl transition-all lg:text-2xl" />
          SEARCHED
        </span>
        <h3 className="text-2xl font-medium uppercase">&quot;{search}&quot;</h3>
      </div>
      {searchedNews.length > 0 ? (
        <Latest name="Results" collection={searchedNews} />
      ) : (
        <div className="flex flex-col justify-center h-full py-10 text-center">
          <p className="px-10 text-2xl">
            We couldn{"'"}t find any new with that name, please try again. 👀
          </p>
        </div>
      )}
    </div>
  );
};

export default Results;
