import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SchoolIcon from '@mui/icons-material/School';
const DashboardActions = () => {
  return (
    <div>
      <div className='dash-buttons'>
        <NavLink to='/edit-profile' className='btn btn-primary'>
          <i>
            <AccountCircleIcon />
          </i>{' '}
          Edit Profile
        </NavLink>
        <NavLink to='/add-experience' className='btn btn-primary'>
          <i>
            <PersonSearchIcon />{' '}
          </i>
          Add Experience
        </NavLink>
        <NavLink to='/add-education' className='btn btn-primary'>
          <i>
            <SchoolIcon />
          </i>{' '}
          Add Education
        </NavLink>
      </div>
    </div>
  );
};
export default DashboardActions;
