const AnalysisDetail = ({ data, game, author }) => {
  return (
    <div className="w-full">
      <div className="bg-[#101010] w-full xl:items-center xl:flex xl:flex-col lg:relative lg:after:content-[''] lg:after:absolute lg:after:top-1/2 lg:after:left-0 lg:after:right-0 lg:after:bottom-0 lg:after:bg-zinc-900">
        <div className="relative flex flex-col gap-5 px-5 py-10 lg:z-10 md:px-16 lg:px-24 xl:w-full xl:max-w-screen-2xl 2xl:px-0 2xl:max-w-screen-xl 2xl:self-center">
          <span className="text-xl font-semibold lg:hidden">{data.title}</span>
          <div className="flex w-full gap-2 lg:gap-5">
            <img
              className="w-20 lg:w-32 xl:w-40"
              src={data.img}
              alt={data.title}
            />
            <div className="flex flex-col w-2/3 gap-3">
              <span className="hidden text-2xl font-semibold xl:text-3xl lg:block lg:pb-5 lg:pt-3">
                {data.title}
              </span>
              <h4 className="text-lg font-medium capitalize">{game}</h4>
              <h4 className="capitalize text-md">By: {author.name}</h4>
            </div>
          </div>
          <span className="absolute bottom-[-0.5em] md:bottom-[-0.65em] right-0 text-[80px] md:text-[100px] lg:text-[128px] font-bold text-orange-500 pr-5 md:pr-14 lg:pr-20 2xl:pr-0 lg:bottom-9">
            {data.average}
          </span>
        </div>
      </div>
      <div className="w-full xl:flex xl:justify-center">
        <div className="flex flex-col gap-5 px-5 py-10 lg:gap-10 lg:flex-row md:px-16 md:pb-10 md:pt-14 lg:pt-5 lg:pb-10 lg:px-24 xl:w-full xl:max-w-screen-2xl 2xl:px-0 2xl:max-w-screen-xl 2xl:self-center">
          <p className="lg:w-1/2">{data.resume}</p>
          <div className="lg:w-1/2 lg:flex lg:flex-col lg:gap-3">
            <h4 className="text-lg font-semibold">5 things you should know:</h4>
            <ul className="flex flex-col gap-4 list-decimal list-inside lg:gap-2">
              {data.pros.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDetail;
