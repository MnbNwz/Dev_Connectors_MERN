import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i>
              <TwitterIcon />
            </i>
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i>
              <FacebookIcon />
            </i>
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i>
              <LinkedInIcon />
            </i>
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i>
              <YouTubeIcon />
            </i>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i>
              <InstagramIcon />
            </i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
