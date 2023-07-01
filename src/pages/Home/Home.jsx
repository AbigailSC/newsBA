import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Hero, Latest } from '@components';
import { selectHeroLandingNews, selectLatestNews } from '@redux/slices/news';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectHeroLandingNews());
    dispatch(selectLatestNews());
  }, []);
  return (
    <section className="flex flex-col gap-20 py-5 lg:py-10">
      <Hero />
      <Latest />
    </section>
  );
};

export default Home;
