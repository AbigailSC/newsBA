import { getTimeAgo } from '@utils';
import { Card } from '@components';

const Latest = ({ name, collection }) => {
  const date = new Date();

  return (
    <div className="relative flex flex-col w-full gap-10 px-5 2xl:self-center 2xl:max-w-screen-xl 2xl:p-0 lg:px-20">
      <h2 className="capitalize flex lg:text-lg 2xl:text-xl font-medium lg:pl-5 relative before:content-[''] before:absolute before:w-[1.25rem] lg:before:w-2 before:h-[1.75rem] before:left-[-1.7rem] lg:before:left-0 before:bg-orange-500 after:content-[''] after:w-full after:h-[1.75rem] after:bg-orange-500 after:right-0 after:flex-[1 0] after:relative after:ml-[-0.5rem] lg:after:ml-0 after:top-0 after:left-5 lg:after:left-0">
        <span className="w-full lg:w-64">{name}</span>
      </h2>
      <div className="flex flex-col w-full gap-10">
        {collection?.map((item, index) => (
          <Card
            key={index}
            image={item?.imageLanding}
            mainTag={item?.mainTag}
            title={item?.title}
            subtitle={item?.subTitle}
            autor={item?.author.name}
            timeAgo={getTimeAgo(date, new Date(item?.date))}
            id={item?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Latest;
