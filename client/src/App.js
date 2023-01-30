import "bootstrap/dist/css/bootstrap.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { connect } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import ProtectedRoute from "./Routes/ProtectedRoute/ProtectedRoute";
import protectedRoutes from "./Routes/protectedRoutes";
import routes from "./Routes/routes";
import { RouteWithSubRoutes } from "./Routes/RouteWithSubRoutes";
//import ErrorPage from "./Views/ErrorPage/ErrorPage";
import { useEffect } from "react";
import setAuthToken from "./Utils/setAuthToken";
import { loginToken } from "./Actions/AuthActions";

function App({ isAuthenticated, loginToken }) {
  useEffect(() => {
    if (localStorage.getItem("token_cseian")) {
      setAuthToken(localStorage.getItem("token_cseian"));
      loginToken();
    }
  }, []);
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          {isAuthenticated &&
            protectedRoutes.map((route, i) => (
              <ProtectedRoute
                key={i}
                {...route}
                editor={route.editor && route.editor}
              />
            ))}
          <Route path="*" component={() => <Redirect to="/" />} />
        </Switch>
      </Router>
      <ReduxToastr
        timeOut={6000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginToken })(App);
