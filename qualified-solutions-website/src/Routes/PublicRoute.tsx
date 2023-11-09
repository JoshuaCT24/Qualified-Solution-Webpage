// dependencies
import { Navigate, Outlet } from 'react-router-dom';

// other
import { AppUrls } from "../AppUrls";
// import Cookies from 'js-cookie';

const PublicRoute = () => {
  // const isAuthenticated = Cookies.get("access_token")
  // return isAuthenticated ? <Navigate to={AppUrls.Client.Dashboard} /> : <Outlet />;
  return <Outlet />
}

export default PublicRoute;