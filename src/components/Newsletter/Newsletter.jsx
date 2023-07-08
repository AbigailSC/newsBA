import { FaBell } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <button className="flex items-center justify-center gap-2">
      <div className="p-3 bg-orange-500 rounded-full w-min">
        <FaBell className="text-xl text-gray-50" />
      </div>
      <span className="text-lg">Suscribe to our newsletter</span>
    </button>
  );
};

export default Newsletter;
