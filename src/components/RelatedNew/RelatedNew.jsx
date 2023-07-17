import { useSelector, useDispatch } from 'react-redux';
import { selectRelatedNew, clearRelatedNew } from '@redux/slices/news';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RelatedNew = ({ mainTag, currentArticleId }) => {
  const dispatch = useDispatch();

  const { relatedNews } = useSelector((state) => state.newsState);

  useEffect(() => {
    dispatch(selectRelatedNew(mainTag, currentArticleId));
  }, [dispatch, mainTag]);

  useEffect(() => {
    return () => {
      if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
        dispatch(clearRelatedNew());
      }
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col border-l-[1em] border-orange-500 px-4 py-1">
      <h4 className="text-lg font-semibold text-orange-500">RELATED:</h4>
      <Link
        to={`/news/${relatedNews?.id}`}
        className="text-xl font-bold uppercase"
      >
        {relatedNews?.title}
      </Link>
    </div>
  );
};

export default RelatedNew;
