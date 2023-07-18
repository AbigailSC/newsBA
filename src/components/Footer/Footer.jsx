import { Link } from 'react-router-dom';

const Footer = () => {
  const news = ['Analysis', 'Latest', 'Releases', 'Trending'];
  const social = ['Facebook', 'Twitter', 'Instagram', 'YouTube'];
  const other = ['About Us', 'Privacy Policy', 'Terms', 'Contact us'];

  return (
    <footer className="bg-[#1F2024] flex flex-col gap-5 pt-10 xl:items-center xl:w-full">
      <div className="flex flex-col gap-0 md:flex-row xl:w-full lg:px-8 xl:max-w-screen-2xl 2xl:px-0 2xl:max-w-screen-xl 2xl:self-center">
        <div className="flex flex-col gap-2 px-5 md:px-16 lg:w-1/3 2xl:px-0">
          <h1 className="text-xl font-bold">
            News<span className="text-orange-500">BA</span>
          </h1>
          <div>
            <span className="text-gray-400">More sites</span>
            <ul>
              <a href="https://gamesba.vercel.app/">GamesBA</a>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-5 md:px-16 lg:w-1/3 2xl:px-0">
          <h3 className="text-gray-400">News</h3>
          <ul className="md:flex md:flex-col md:gap-2">
            {news.map((item, index) => (
              <li
                key={index}
                className="hover:text-gray-50 hover:underline w-min"
              >
                <Link to={`${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 px-5 md:px-16 lg:w-1/3 2xl:px-0">
          <h3 className="text-gray-400">Get in touch with us</h3>
          <ul className="md:flex md:flex-col md:gap-2">
            {social.map((item, index) => (
              <li
                key={index}
                className="hover:text-gray-50 hover:underline w-min"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="xl:w-full px-5 py-5 bg-[#161619] text-gray-400 md:px-14 lg:px-24 xl:px-28 xl:flex xl:justify-center">
        <div className="flex flex-col-reverse gap-2 md:flex-row md:justify-between xl:w-full xl:max-w-screen-2xl 2xl:px-0 2xl:max-w-screen-xl 2xl:self-center">
          <span className="">
            Made with 🖤 and ☕ by{' '}
            <a className="text-orange-500" href="https://github.com/AbigailSC">
              AbigailSC
            </a>
          </span>
          <span className="w-full h-[1px] bg-zinc-400/25 md:hidden"></span>
          <ul className="md:flex md:gap-2">
            {other.map((item, index) => (
              <li key={index} className="hover:text-gray-50 hover:underline">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
