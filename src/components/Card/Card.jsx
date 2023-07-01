const Card = ({ image, tag, title, subtitle, autor, timeAgo }) => {
  return (
    <article className="flex flex-col w-full gap-5 pb-5 border-b-2 border-b-neutral-700">
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="flex flex-col gap-2">
        <span className="font-medium text-orange-600 uppercase">{tag}</span>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-300">{subtitle}</p>
        <div className="flex gap-5">
          <p className="text-gray-300">
            By <span className="font-medium text-gray-200">{autor}</span>
          </p>
          <p className="text-gray-500">{timeAgo}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
