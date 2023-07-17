import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Latest } from '@components';

const Tag = () => {
  const { tag } = useParams();
  const { tagDetail } = useSelector((state) => state.newsState);
  const tagModified = tag.replace(/-/g, ' ');

  return (
    <div>
      <Latest name={tagModified} collection={tagDetail} />
    </div>
  );
};

export default Tag;
