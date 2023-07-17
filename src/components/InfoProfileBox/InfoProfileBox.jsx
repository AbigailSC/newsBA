const InfoProfileBox = ({ length }) => {
  const data = [
    {
      total: length,
      title: 'Favorites'
    },
    {
      total: 12,
      title: 'Comments'
    },
    {
      total: 38,
      title: 'Views'
    }
  ];
  return (
    <div className="flex items-center justify-center w-full h-20 gap-5 px-5 py-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full h-20 gap-5"
        >
          <div
            className={`flex flex-col items-center gap-2 ${
              index > 0 && 'text-zinc-400'
            }`}
          >
            <span className="font-medium text-orange-500">{item.total}</span>
            {item.title}
          </div>
          {index < data.length - 1 && (
            <span className="block w-[1px] h-full bg-zinc-400"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoProfileBox;
