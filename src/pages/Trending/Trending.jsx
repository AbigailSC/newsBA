import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTrendingNews, clearTrendingNews } from '@redux/slices/news';

import { Latest, TopArticle, Paginate } from '@components';
import { getTotalPages } from '@utils';

const Trending = () => {
  const dispatch = useDispatch();
  const { allTrendingNews } = useSelector((state) => state.newsState);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const totalItems = allTrendingNews.length;
  const totalPages = getTotalPages(totalItems, pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const currentNewsPage = allTrendingNews.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    return () => {
      if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
        dispatch(clearTrendingNews());
      }
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(selectAllTrendingNews());
  }, []);
  return (
    <section className="relative flex flex-col gap-10 pb-5 lg:gap-20 lg:py-10 lg:px-6">
      <TopArticle
        title="Trending"
        categoryData={allTrendingNews}
        description="Discover the ultimate source for the latest video game analysis"
      />
      <Latest name="Trending" collection={currentNewsPage} />
      <Paginate
        length={allTrendingNews.length}
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={changePage}
      />
    </section>
  );
};

export default Trending;
