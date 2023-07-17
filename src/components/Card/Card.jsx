import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectDetailOfNews } from '@redux/slices/news';

const Card = ({ image, mainTag, title, subtitle, autor, timeAgo, id }) => {
  const dispatch = useDispatch();

  const getDetailNews = (id) => {
    dispatch(selectDetailOfNews(id));
  };
  return (
    <article className="flex flex-col w-full gap-5 pb-5 border-b-2 sm:gap-5 sm:flex-row border-b-neutral-700">
      <Link
        onClick={() => getDetailNews(id)}
        to={`/news/${id}`}
        className="w-full sm:w-1/3"
      >
        <img src={image} alt={title} className="w-full h-auto " />
      </Link>
      <div className="flex flex-col gap-2 sm:w-2/3">
        <span className="font-medium text-orange-500 uppercase cursor-pointer hover:text-orange-600">
          <Link to={`/tag/${mainTag}`}>{mainTag}</Link>
        </span>
        <h3
          className="text-2xl font-semibold cursor-pointer hover:underline"
          onClick={() => getDetailNews(id)}
        >
          <Link to={`/news/${id}`}>{title}</Link>
        </h3>
        <p className="text-gray-300">{subtitle}</p>
        <div className="flex gap-5">
          <p className="text-gray-300">
            By{' '}
            <span className="font-medium text-gray-200">
              <a href="#">{autor}</a>
            </span>
          </p>
          <p className="text-gray-500">{timeAgo}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
