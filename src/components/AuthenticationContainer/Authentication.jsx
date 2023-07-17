import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setLogOut } from '@redux/slices/auth';

const Authentication = () => {
  const { isAuth, user } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(setLogOut());
  };

  return (
    <div className="absolute divide-y divide-zinc-400/25 bottom-[-129px] bg-[#101010] left-[-1.25rem] right-[-1.25rem] flex flex-col text-end">
      {isAuth && user !== null ? (
        <>
          <Link
            className="p-5 md:px-14 lg:px-24 xl:px-6 hover:bg-zinc-950"
            to="/profile"
          >
            Profile
          </Link>
          <Link
            onClick={() => logOut()}
            className="p-5 md:px-14 lg:px-24 xl:px-6 hover:bg-zinc-950"
            to="/"
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            className="p-5 md:px-14 lg:px-24 xl:px-6 hover:bg-zinc-950"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="p-5 md:px-14 lg:px-24 xl:px-6 hover:bg-zinc-950"
            to="/register"
          >
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default Authentication;
