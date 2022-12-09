import { RouteWithSubRoutes } from "./Routes/RouteWithSubRoutes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./Routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";
import protectedRoutes from "./Routes/protectedRoutes";
import { connect } from "react-redux";
import ProtectedRoute from "./Routes/ProtectedRoute/ProtectedRoute";
//import ErrorPage from "./Views/ErrorPage/ErrorPage";
import { CommingSoonPage } from "./Views/CommingSoonPage";

function App({ isAuthenticated }) {
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

export default connect(mapStateToProps, null)(App);
