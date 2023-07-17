import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidTrashAlt, BiLink } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import { DeleteModal } from '@components';

import { selectDetailOfNews } from '@redux/slices/news';

const Favorites = ({ data }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDelete = () => {
    setSelectedId(null);
    setShowModal(false);
  };

  const handleDetail = (id) => {
    dispatch(selectDetailOfNews(id));
  };

  return (
    <div className="flex flex-col gap-2">
      {data.map((favorite, index) => (
        <div
          className="bg-[#101010] rounded-sm p-5 flex flex-col gap-5"
          key={index}
        >
          <span className="font-semibold">{favorite.title}</span>
          <span className="block w-full h-[1px] bg-zinc-700"></span>
          <div className="flex justify-between">
            <Link
              onClick={() => handleDetail(favorite.id)}
              to={`/news/${favorite.id}`}
            >
              <BiLink className="text-xl text-orange-500" />
            </Link>
            <button
              onClick={() => setShowModal(true) && setSelectedId(favorite.id)}
            >
              <BiSolidTrashAlt className="text-xl transition-colors hover:text-red-600" />
            </button>
            {showModal && (
              <DeleteModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onDelete={() => handleDelete(selectedId)}
                id={favorite.id}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
