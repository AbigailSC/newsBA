import { useDispatch, useSelector } from 'react-redux';
import { gridClass } from '@utils';
import { Link } from 'react-router-dom';
import { selectDetailOfNews } from '@redux/slices/news';

const Hero = () => {
  const { heroLandingNews } = useSelector((state) => state.newsState);
  const dispatch = useDispatch();

  const getDetailNews = (id) => {
    dispatch(selectDetailOfNews(id));
  };
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4 px-5 cursor-pointer lg:px-20 2xl:self-center 2xl:max-w-screen-xl 2xl:p-0 md:grid-cols-4 md:grid-rows-5">
      {heroLandingNews.map((news, index) => (
        <Link
          to={`/news/${news.id}`}
          onClick={() => getDetailNews(news.id)}
          className={`${gridClass[index]} bg-center bg-cover p-5 flex flex-col justify-between gap-4`}
          key={index}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),url(${news.imageLanding})`
          }}
        >
          <span className="px-2 py-1 text-sm bg-orange-600 w-fit">
            Video games
          </span>
          <h3 className="font-semibold line-clamp-2 lg:text-lg 2xl:text-xl hover:underline">
            <Link to={`/news/${news.id}`}>{news.title}</Link>
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default Hero;
