import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DoneIcon from '@mui/icons-material/Done';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
const ProfileItem = ({
  profile: { user, status, company, location, skills },
}) => {
  return (
    <div className='profile bg-light' data-aos='zoom-in'>
      <img src={user?.avatar} alt='' className='round-img' />
      <div>
        <h2>{user?.name}</h2>
        <p>
          {status} {company && <span>at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${user?._id}`} className='btn btn-primary'>
          View Profile
        </Link>
        <Link to={`#`} className='btn btn-primary'>
          <i>
            <AccountBoxSharpIcon />
          </i>
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, idx) => (
          <li key={idx} className='text-primary'>
            <i>
              <DoneIcon />
            </i>{' '}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
