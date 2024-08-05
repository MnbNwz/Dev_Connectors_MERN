import React from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import Spinner from '../Spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { NavLink } from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// we want to call get current profile soon its load so we use useEffect  and call the func and soon we run its  once so we  write empty []
const Dashboard = ({
  deleteAccount,
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1 className='large text-primary'> Dashboard</h1>

      <p className='lead my-3'>
        <i>
          <PersonIcon />
        </i>
        <strong>Welcome {user && user.name}</strong>
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className='m-3'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i>
                <DeleteForeverIcon />
              </i>
              Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {' '}
          <p> YOU HAVE NOT ANY PROFILE, PLEASE ADD SOME INFO</p>{' '}
          <NavLink to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </NavLink>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { deleteAccount, getCurrentProfile })(
  Dashboard
);

// first we add a link using navigate to the dashboard from other page
