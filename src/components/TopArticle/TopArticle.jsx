import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectDetailOfNews } from '@redux/slices/news';
import { MdRssFeed } from 'react-icons/md';

const TopArticle = ({ categoryData, description, title }) => {
  const dispatch = useDispatch();
  const getTopArticleOfCategory = (categoryData) => {
    const data = categoryData[0];
    if (title === 'Trending') {
      return [...categoryData].sort((a, b) => b.views - a.views)[0];
    }
    if (title === 'Analysis') {
      return [...categoryData].sort(
        (a, b) => b.analysis.average - a.analysis.average
      )[0];
    }
    return data;
  };
  const getDetailNews = (id) => {
    dispatch(selectDetailOfNews(id));
  };
  const data = getTopArticleOfCategory(categoryData);

  return (
    <div className="flex flex-col gap-5 cursor-pointer lg:px-20 2xl:self-center lg:w-full 2xl:max-w-screen-xl 2xl:p-0">
      <div className="bg-[#101010] w-full px-5 text-center flex flex-col items-center justify-center py-10 h-36 lg:absolute lg:top-0 lg:left-0">
        <h3 className="flex items-center gap-2 text-2xl font-semibold">
          <span className="capitalize">{title}</span> of the month <MdRssFeed />
        </h3>
        <p className="text-zinc-400">{description}</p>
      </div>
      <Link
        to={`/news/${data?.id}`}
        onClick={() => getDetailNews(data?.id)}
        className="flex flex-col justify-between gap-4 p-5 bg-center bg-cover lg:p-10  h-80 lg:h-[480px] xl:h-[540px] lg:mt-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),url(${data?.imageLanding})`
        }}
      >
        <span className="px-2 py-1 text-sm capitalize bg-orange-500 w-fit">
          {data?.mainTag}
        </span>
        <h3 className="font-semibold line-clamp-2 lg:text-xl 2xl:text-xl hover:underline">
          {data?.title}
        </h3>
      </Link>
    </div>
  );
};

export default TopArticle;
