import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const AdminPrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user.user.user);

  console.log(user);

  return user?.isAdmin ?? false ? children : <Navigate to="/" />;
};

export default AdminPrivateRoute;