import { useSelector } from 'react-redux';
import { gridClass } from '@utils';

const Hero = () => {
  const { heroLandingNews } = useSelector((state) => state.newsState);

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4 px-5 lg:px-20 2xl:self-center 2xl:max-w-screen-xl 2xl:p-0 md:grid-cols-4 md:grid-rows-5">
      {heroLandingNews.map((news, index) => (
        <div
          className={`${gridClass[index]} bg-center bg-cover p-5 flex flex-col justify-between gap-4`}
          key={index}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),url(${news.imageLanding})`
          }}
        >
          <span className="px-2 py-1 bg-orange-600 w-fit">Video games</span>
          <h3 className="font-semibold line-clamp-2">{news.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Hero;
