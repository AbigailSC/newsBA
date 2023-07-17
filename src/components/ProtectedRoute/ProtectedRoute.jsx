import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuth, user } = useSelector((state) => state.authState);

  if (isAuth === null || user === null) return <Navigate replace to="/login" />;
  return <>{children}</>;
};

export default ProtectedRoute;
