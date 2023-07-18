import { useDispatch } from 'react-redux';
import { deleteFavorite } from '@redux/slices/auth';

const DeleteModal = ({ isOpen, onClose, onDelete, id }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteFavorite(id));
    onDelete();
  };
  return (
    <div
      className={`z-20 h-screen fixed top-0 bottom-0 left-0 right-0 w-full flex justify-center items-center bg-gray-800 bg-opacity-40 ${
        isOpen ? ' md:p-20 bg-opacity-80 backdrop-blur-sm' : 'hidden'
      }`}
    >
      <div className="flex flex-col w-full max-w-lg gap-5 p-5 mx-5 rounded-sm lg:mx-0 bg-zinc-900">
        <h2 className="mb-4 text-lg font-semibold">
          Are you sure you want to delete this favorite?
        </h2>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 text-white bg-red-600 rounded-sm hover:bg-red-700"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 text-white bg-gray-500 rounded-sm hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
