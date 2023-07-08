import { Link } from 'react-router-dom';

const Tags = ({ tag }) => {
  const tagModified = tag.toLowerCase().replace(' ', '-');
  return (
    <button className="px-4 py-1 capitalize border rounded-sm border-zinc-700 bg-zinc-950 hover:text-gray-300">
      <Link to={`/tag/${tagModified}`}>{tag}</Link>
    </button>
  );
};

export default Tags;
