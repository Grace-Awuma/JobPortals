import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserPrivateRoute = ({ children }) => {
   const token = useSelector((state) => state?.user?.user.user.token);

  return token ?? "" ? children : <Navigate to="/" />;
};

export default UserPrivateRoute;