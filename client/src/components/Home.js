import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../actions/alert';
import { Navigate } from 'react-router-dom';


const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to='/dashboard' replace={true} />;
  }
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <p className='x-large'>WELCOME</p>
          
          <h1>
            "Happy, To See You Back, WE ARE THE MERN DEVELOPERS.
            CREATE A
            DEVELOPERS PROFILE, SHARE POSTS AND GET HELP FROM OTHER
            DEVELOPERS"
          </h1>
          <div className='buttons'>
            <NavLink className='btn btn-primary' to='/register'>
              Register
            </NavLink>
            <NavLink className='btn btn-light' to='/login'>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert })(Home);
