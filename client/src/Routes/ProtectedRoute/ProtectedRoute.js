import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import ProtecteComponent from "./ProtecteComponent";

const ProtectedRoute = (route) => {
  return (
    <>
      {route.isAuthenticated ? (
        <Route
          path={route.path}
          render={(props) => {
            return (
              <ProtecteComponent>
                <route.component {...props} routes={route.routes} />
              </ProtecteComponent>
            );
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, null)(ProtectedRoute);
