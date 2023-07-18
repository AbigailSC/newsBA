import { useSelector, useDispatch } from 'react-redux';
import {
  selectRelatedNew,
  clearRelatedNew,
  selectDetailOfNews
} from '@redux/slices/news';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const RelatedNew = ({ mainTag, currentArticleId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { relatedNews } = useSelector((state) => state.newsState);

  useEffect(() => {
    dispatch(selectRelatedNew(mainTag, currentArticleId));
  }, [id]);

  useEffect(() => {
    return () => {
      if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
        dispatch(clearRelatedNew());
      }
    };
  }, [dispatch]);

  const changeNews = (id) => {
    dispatch(selectDetailOfNews(id));
  };

  return (
    <div className="flex flex-col border-l-[1em] border-orange-500 px-4  lg:gap-5 lg:py-5 py-1">
      <h4 className="text-lg font-semibold text-orange-500">RELATED:</h4>
      <Link
        onClick={() => changeNews(relatedNews?.id)}
        to={`/news/${relatedNews?.id}`}
        className="text-xl font-bold uppercase lg:text-2xl"
      >
        {relatedNews?.title}
      </Link>
    </div>
  );
};

export default RelatedNew;
