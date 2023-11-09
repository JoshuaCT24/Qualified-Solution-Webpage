// dependencies
import { Route, Routes, Navigate } from "react-router-dom";

// pages
// import SignIn from "../pages/auth/sign-in/SignIn";
// import SignUp from "../pages/auth/sign-up/SignUp";

// route
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// other
import { AppUrls } from "../AppUrls";

//pages
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Careers from "../Pages/Careers/Careers/Careers";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact/Contact";
import Services from "../Pages/Services/Services/Services";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={AppUrls.Client.Home} />} />
      <Route element={<PublicRoute />}>
        <Route path={AppUrls.Client.Auth.SignIn} element={<SignIn />} />
        <Route path={AppUrls.Client.Auth.SignUp} element={<SignUp />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={AppUrls.Client.Home} element={<Home />} />
        <Route path={AppUrls.Client.Careers} element={<Careers />} />
        <Route path={AppUrls.Client.AboutUs} element={<AboutUs />} />
        <Route path={AppUrls.Client.Contact} element={<Contact />} />
        <Route path={AppUrls.Client.Services} element={<Services />} />
        <Route
          path={AppUrls.Client.TermsConditions}
          element={<TermsConditions />}
        />
      </Route>
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
