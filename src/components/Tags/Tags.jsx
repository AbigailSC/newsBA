import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectTagDetail } from '@redux/slices/news';

const Tags = ({ tag }) => {
  const dispatch = useDispatch();
  const tagModified = tag.toLowerCase().replace(' ', '-');

  const handleTag = () => {
    dispatch(selectTagDetail(tagModified));
  };

  return (
    <button className="px-4 py-1 capitalize border rounded-sm border-zinc-700 bg-zinc-950 hover:text-gray-300">
      <Link onClick={() => handleTag()} to={`/tag/${tagModified}`}>
        {tag}
      </Link>
    </button>
  );
};

export default Tags;
