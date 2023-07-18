import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Hero, Latest } from '@components';
import { selectHeroLandingNews, selectLatestNews } from '@redux/slices/news';

const Home = () => {
  const dispatch = useDispatch();
  const { latestNews } = useSelector((state) => state.newsState);

  useEffect(() => {
    dispatch(selectHeroLandingNews());
    dispatch(selectLatestNews());
  }, []);
  return (
    <section className="flex flex-col gap-20 py-5 lg:py-10">
      <Hero />
      {latestNews && <Latest name="Latest" collection={latestNews} />}
      <div className="flex justify-center w-full">
        <Link
          to="/latest"
          className="px-5 py-2 text-white bg-orange-500 rounded-md "
        >
          Load More
        </Link>
      </div>
    </section>
  );
};

export default Home;
