import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Latest as LatestComponent, TopArticle, Paginate } from '@components';
import { selectAllLatestNews, clearLatestNews } from '@redux/slices/news';

const Latest = () => {
  const dispatch = useDispatch();
  const { allLatestNews } = useSelector((state) => state.newsState);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const currentNewsPage = allLatestNews.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(selectAllLatestNews());
  }, []);

  useEffect(() => {
    return () => {
      if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
        dispatch(clearLatestNews());
      }
    };
  }, [dispatch]);

  return (
    <section className="relative flex flex-col gap-10 pb-5 lg:gap-20 lg:py-10 lg:px-6">
      <TopArticle
        title="Latest"
        categoryData={currentNewsPage}
        description="Discover the ultimate source for the latest video game news"
      />
      <LatestComponent name="Latest" collection={currentNewsPage} />
      <Paginate
        length={allLatestNews.length}
        currentPage={currentPage}
        onChangePage={changePage}
      />
    </section>
  );
};

export default Latest;
