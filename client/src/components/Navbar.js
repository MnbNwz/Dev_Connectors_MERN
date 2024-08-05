import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li className='nav-item'>
        <NavLink className='nav-link active' to='/profiles'>
          Developers
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link active' to='/dashboard'>
          <i>
            <DashboardIcon />{' '}
          </i>
          <span className='hide-sm'> Dashboard</span>
        </NavLink>
      </li>
      <li className='nav-item'>
      <NavLink className='nav-link active' to='/posts'>
        Posts
      </NavLink>
    </li>
      <li className='nav-item'>
        <NavLink
          onClick={logout}
          className='nav-link active'
          aria-current='page'
          to='/login'
          // to='#!'
        >
          <i>
            <LogoutIcon />{' '}
          </i>
          <span className='hide-sm'> Logout</span>
        </NavLink>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li className='nav-item'>
        <NavLink className='nav-link active' to='/profiles'>
          Developers
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link active' aria-current='page' to='/'>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link active' to='/register'>
          Register
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link active' to='/login'>
          Login
        </NavLink>
      </li>
    </ul>
  );
  return (
    <div>
      <nav className='navbar bg-dark'>
        <h3>
          <NavLink className='nav-link active' aria-current='page' to='/'>
            <i>
              <KeyboardCommandKeyIcon />{' '}
            </i>
            Connector
          </NavLink>
        </h3>
        {!loading && <> {isAuthenticated ? authLinks : guestLinks}</>}
      </nav>
    </div>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
