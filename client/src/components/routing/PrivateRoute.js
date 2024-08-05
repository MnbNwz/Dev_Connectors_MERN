import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';


// we have to accept element prop and anything we want 
const PrivateRoute = ({
  element: Element,
  auth: { isAuthenticated, loading },
  // we used rest operator so we take anything that we passed in 
  ...rest
}) => {return(
  <Route
  
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Navigate to='/login' replace={true} />
      ) : (
        <Element {...props} />
      )
    }
  />
);
  }
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
