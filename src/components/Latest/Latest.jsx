import { useSelector } from 'react-redux';
import { Card } from '../Card';

const Latest = () => {
  const { latestNews } = useSelector((state) => state.newsState);

  return (
    <div className="relative flex flex-col w-full gap-10 px-5 2xl:self-center 2xl:max-w-screen-xl 2xl:p-0 lg:px-20">
      <h2 className="flex lg:text-lg 2xl:text-xl  font-medium lg:pl-5 relative before:content-[''] before:absolute before:w-[1.25rem] lg:before:w-2 before:h-[1.75rem] before:left-[-1.7rem] lg:before:left-0 before:bg-orange-500 after:content-[''] after:w-full after:h-[1.75rem] after:bg-orange-500 after:right-0 after:flex-[1 0] after:relative after:ml-[-0.5rem] lg:after:ml-5 after:top-0 after:left-5 lg:after:left-0">
        Latest
      </h2>
      <div className="flex flex-col w-full gap-5">
        {latestNews.map((news, index) => (
          <Card
            key={index}
            image={news.imageLanding}
            tag={news.tags[0].name}
            title={news.title}
            subtitle={news.subTitle}
            autor={news.author.name}
            timeAgo={news.date}
            id={news.id}
          />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button className="px-5 py-2 text-white bg-orange-500 rounded-md ">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Latest;
