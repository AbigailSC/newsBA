import { Link } from 'react-router-dom';

const Footer = () => {
  const news = ['Analysis', 'Latest', 'Releases', 'Reviews', 'Trending'];
  const social = ['Facebook', 'Twitter', 'Instagram', 'YouTube'];
  const other = ['About Us', 'Privacy Policy', 'Terms', 'Contact us'];

  return (
    <footer className="bg-[#1F2024] mt-10 flex flex-col gap-5">
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex flex-col gap-2 px-5">
        <h3 className="text-gray-400">News</h3>
        <ul>
          {news.map((item, index) => (
            <li key={index} className="hover:text-gray-50 hover:underline">
              <Link to={`${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 px-5">
        <h3 className="text-gray-400">Get in touch with us</h3>
        <ul>
          {social.map((item, index) => (
            <li key={index} className="hover:text-gray-50 hover:underline">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col-reverse gap-2 px-5 py-5 bg-[#161619] text-gray-400">
        <span className="">Copyright 2023, All Rights Reserved.</span>
        <span className="w-full h-[1px] bg-zinc-400/25"></span>
        <ul>
          {other.map((item, index) => (
            <li key={index} className="hover:text-gray-50 hover:underline">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
