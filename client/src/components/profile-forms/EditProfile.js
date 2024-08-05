import React from 'react';
import PropTypes from 'prop-types';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });
  const navigate = useNavigate();
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  useEffect(() => {
    getCurrentProfile();
    setFormData({
      company: loading || !profile.company ? ' ' : profile.company,
      website: loading || !profile.website ? ' ' : profile.website,
      location: loading || !profile.location ? ' ' : profile.location,
      status: loading || !profile.status ? ' ' : profile.status,
      skills: loading || !profile.skills ? ' ' : profile.skills.join(''),
      githubusername:
        loading || !profile.githubusername ? ' ' : profile.githubusername,
      bio: loading || !profile.bio ? ' ' : profile.company,
      twitter: loading || !profile.social ? ' ' : profile.bio,
      facebook: loading || !profile.social ? ' ' : profile.facebook,
      linkedin: loading || !profile.social ? ' ' : profile.linkedin,
      youtube: loading || !profile.social ? ' ' : profile.youtube,
      instagram: loading || !profile.social ? ' ' : profile.instagram,
    });
  }, [loading, getCurrentProfile]);
  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
    navigate('/dashboard');
  };

  return (
    <div>
      <section className='container'>
        <h1 className='large text-primary'>Create Your Profile</h1>

        <small>* = required field</small>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <select name='status' value={status} onChange={(e) => onChange(e)}>
              <option>* Select Professional Status</option>
              <option value='Developer'>Developer</option>
              <option value='Junior Developer'>Junior Developer</option>
              <option value='Senior Developer'>Senior Developer</option>
              <option value='Manager'>Manager</option>
              <option value='Student or Learning'>Student or Learning</option>
              <option value='Instructor'>Instructor or Teacher</option>
              <option value='Intern'>Intern</option>
              <option value='Other'>Other</option>
            </select>
            <small className='form-text'>
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Company'
              name='company'
              value={company}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Could be your own company or one you work for
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Website'
              name='website'
              value={website}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Could be your own or a company website
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Skills'
              name='skills'
              value={skills}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Github Username'
              name='githubusername'
              value={githubusername}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className='form-group'>
            <textarea
              placeholder='A short bio of yourself'
              name='bio'
              value={bio}
              onChange={(e) => onChange(e)}
            />
            <small className='form-text'>Tell us a little about yourself</small>
          </div>

          <div className='my-2'>
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type='button'
              className='btn btn-light'
            >
              <NavLink> Add Social Network Links</NavLink>
            </button>
            <span>Optional</span>
          </div>
          {displaySocialInputs && (
            <Fragment>
              <div className='form-group social-input'>
                <i>
                  <TwitterIcon />
                </i>
                <input
                  type='text'
                  placeholder='Twitter URL'
                  name='twitter'
                  value={twitter}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group social-input'>
                <i>
                  <FacebookIcon />
                </i>
                <input
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group social-input'>
                <i>
                  <YouTubeIcon />
                </i>
                <input
                  type='text'
                  placeholder='YouTube URL'
                  name='youtube'
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group social-input'>
                <i>
                  <LinkedInIcon />
                </i>
                <input
                  type='text'
                  placeholder='Linkedin URL'
                  name='linkedin'
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group social-input'>
                <i>
                  <InstagramIcon />
                </i>
                <input
                  type='text'
                  placeholder='Instagram URL'
                  name='instagram'
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </Fragment>
          )}

          <input type='submit' className='btn btn-primary my-1' />
          <NavLink className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </NavLink>
        </form>
      </section>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  EditProfile
);
