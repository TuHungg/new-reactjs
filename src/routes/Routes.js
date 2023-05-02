import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { BrandLoading } from "components";
import Main from "layouts/Main";
import ScrollToTop from "helpers/ScrollToTop";
import { HomepageView, SignInpageView, SignUppageView } from "./views";
import routeUrls from "configs/route";

import { Helmet } from "react-helmet";
import { useConfigsStore } from "stores";

const AppRoutes = () => {

  return (
    <Router>
      <Suspense fallback={<BrandLoading />}>
        <Main>
          <ScrollToTop />
          <Routes>
            <Route index element={<SignInpageView />} />

            <Route path={routeUrls.homepage.path} element={<HomepageView />}></Route>
            <Route path={routeUrls.signUpPage.path} element={<SignUppageView />}></Route>
            {/* <Route
                path="*"
                element={<Navigate to={routeUrls.loginPage.path} replace />}
              /> */}
          </Routes>
        </Main>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
