// dependencies
import { Navigate } from 'react-router-dom';

// other
import { AppUrls } from "../AppUrls";
import MainLayout from '../Pages/Layout/MainLayout/MainLayout';
// import Cookies from 'js-cookie';

const PrivateRoute = () => {
  // const isAuthenticated = Cookies.get("access_token");
  const isAuthenticated = true;
  return isAuthenticated ?
    <>
      <MainLayout />
    </>
    : <Navigate to={AppUrls.Client.Auth.SignIn} />;
}

export default PrivateRoute;