import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Latest, TopArticle, Paginate } from '@components';
import { getAllAnalysis, clearAnalysis } from '@redux/slices/news';

const Analysis = () => {
  const dispatch = useDispatch();
  const { allAnalysis } = useSelector((state) => state.newsState);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const currentNewsPage = allAnalysis.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    return () => {
      if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
        dispatch(clearAnalysis());
      }
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllAnalysis());
  }, []);

  return (
    <section className="relative flex flex-col gap-10 pb-5 lg:gap-20 lg:py-10 lg:px-6">
      <TopArticle
        title="Analysis"
        categoryData={allAnalysis}
        description="Discover the ultimate source for the latest video game analysis"
      />
      <Latest name="Analysis" collection={allAnalysis} />
      <Paginate
        length={allAnalysis.length}
        currentPage={currentNewsPage}
        onChangePage={changePage}
      />
    </section>
  );
};

export default Analysis;
