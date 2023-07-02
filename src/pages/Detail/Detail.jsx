/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { clearDetailOfNews } from '@redux/slices/news';
import { RelatedNew } from '@components';

import {
  applyAnchorStyles,
  getFirstArticles,
  getTimeAgo,
  getSecondArticle
} from '@utils';

const Detail = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.newsState);

  const date = new Date();
  const dateToCompare = new Date(detail.date);
  const timeAgo = getTimeAgo(date, dateToCompare);

  const firstArticles = getFirstArticles(detail.article);
  const secondArticle = getSecondArticle(detail.article);

  useEffect(() => {
    return () => {
      if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
        dispatch(clearDetailOfNews());
      }
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-20 lg:py-10">
      <section className="flex flex-col gap-5">
        <header className="flex flex-col w-full gap-5 px-5">
          <nav className="hidden w-full">
            <ul className="flex items-center">
              <Link to="/">Home</Link>
              <MdKeyboardArrowRight className="text-lg" />
              <Link to="/news">News</Link>
            </ul>
          </nav>
          <div className="relative ml-[-20px] mr-[-20px] after:content-[''] after:h-40 after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-zinc-900">
            <img src={detail.imageLanding} alt={detail.title} />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-semibold">{detail.title}</h2>
            <p>{detail.subTitle}</p>
          </div>
        </header>
        <span className="block w-full h-[1px] bg-zinc-600 " />
        <article className="flex flex-col gap-5 px-5">
          <div className="flex gap-5">
            <img
              src={detail.author.imageProfile}
              alt={detail.author.name}
              className="object-cover h-14 w-14"
            />
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-medium text-orange-500">
                {detail.author.name}
              </h4>
              <p className="text-sm text-gray-500">Published {timeAgo}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 py-5">
            {firstArticles.map((item, index) => (
              <p
                className="leading-relaxed tracking-wide"
                key={index}
                dangerouslySetInnerHTML={{ __html: applyAnchorStyles(item) }}
              ></p>
            ))}
          </div>
          <RelatedNew />
          <div className="flex flex-col gap-5 py-5">
            {secondArticle.map((item, index) => (
              <p
                className="leading-relaxed tracking-wide"
                key={index}
                dangerouslySetInnerHTML={{ __html: applyAnchorStyles(item) }}
              ></p>
            ))}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: detail.externalData }}
            className="aspect-square"
          ></div>
        </article>
      </section>
    </div>
  );
};

export default Detail;
