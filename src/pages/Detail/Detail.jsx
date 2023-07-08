/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearDetailOfNews } from '@redux/slices/news';
import { RelatedNew, Newsletter, SocialMedia, Tags } from '@components';

import {
  applyAnchorStyles,
  getFirstArticles,
  getTimeAgo,
  getSecondArticle,
  getLastArticles
} from '@utils';

const Detail = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.newsState);

  const date = new Date();
  const dateToCompare = new Date(detail.date);
  const timeAgo = getTimeAgo(date, dateToCompare);

  const firstArticles = getFirstArticles(detail.article);
  const secondArticle = getSecondArticle(detail.article);
  const lastArticles = getLastArticles(detail.article);

  useEffect(() => {
    return () => {
      if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
        dispatch(clearDetailOfNews());
      }
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-20 lg:py-10">
      <section className="flex flex-col gap-5 ">
        <header className="relative flex flex-col">
          <div className="absolute top-0 bottom-0 left-0 right-0 hidden w-full h-full overflow-hidden md:block">
            <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 z-10 w-full h-full opacity-60 bg-gradient-to-t from-transparent to-black" />
            <img
              src={detail.imageLanding}
              alt={detail.title}
              className="object-cover w-full h-full blur-md"
            />
          </div>
          <div className="z-10 flex flex-col w-full gap-5 px-5 md:flex-col-reverse md:px-10 md:pt-16">
            <div className="relative ml-[-20px] md:ml-[-40px] mr-[-20px] md:mr-[-40px] after:content-[''] after:h-40 after:w-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-zinc-900">
              <img src={detail.imageLanding} alt={detail.title} />
            </div>
            <div className="flex flex-col gap-5 md:p-5">
              <h2 className="text-xl font-semibold md:text-3xl">
                {detail.title}
              </h2>
              <p className="md:text-xl">{detail.subTitle}</p>
            </div>
          </div>
        </header>
        <span className="block w-full h-[1px] bg-zinc-600 md:hidden" />
        <article className="flex flex-col gap-5 px-5 md:px-28">
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
          <div className="flex pt-5 md:mx-auto">
            <div
              className="min-w-[320px] md:min-w-[500px]"
              dangerouslySetInnerHTML={{ __html: detail.externalData }}
            />
          </div>
          <div className="flex flex-col gap-5 py-5">
            {lastArticles.map((item, index) => (
              <p
                className="leading-relaxed tracking-wide hyphens-auto"
                key={index}
                dangerouslySetInnerHTML={{ __html: applyAnchorStyles(item) }}
              ></p>
            ))}
          </div>
        </article>
        <div className="flex flex-col gap-10 px-5 md:px-16">
          <Newsletter />
          <SocialMedia />
        </div>
        <div className="flex flex-col gap-5 px-5 md:px-16">
          <h3 className="text-xl font-semibold text-zinc-500">
            Related Topics
          </h3>
          <div className="flex flex-wrap w-full gap-2">
            {detail.tags.map((tag, index) => (
              <Tags tag={tag.name} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
