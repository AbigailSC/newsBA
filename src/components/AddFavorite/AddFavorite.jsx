import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiTwotoneStar } from 'react-icons/ai';

import { addFavorite } from '@redux/slices/auth';
import { FavoriteAddedModal } from '@components';

const AddFavorite = ({ id, title }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleAddFavorite = (id, title) => {
    dispatch(addFavorite(id, title));
    setShowModal(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  }, [showModal]);

  return (
    <button
      onClick={() => handleAddFavorite(id, title)}
      className="flex items-center justify-center w-full gap-2"
    >
      <div className="p-3 bg-orange-500 rounded-full w-min">
        <AiTwotoneStar className="text-xl text-gray-50" />
      </div>
      <span className="text-lg">Add to favorites</span>
      {showModal && <FavoriteAddedModal />}
    </button>
  );
};

export default AddFavorite;
