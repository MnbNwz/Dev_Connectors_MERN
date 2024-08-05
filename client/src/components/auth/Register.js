import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const Register = ({ setAlert, register, isAuthenticated }) => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const { name, email, password, cpassword } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setAlert('Password do not match', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
    // navigate('/login')
  };
  if (isAuthenticated) {
    return <Navigate to='/dashboard' replace={true} />;
  }
  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <div className='landing-innnerr'>
          <div id='cardss'>
            <h1 className='large text-primary'>Sign Up</h1>
            <p className='lead'>
              <i className='fas fa-user' /> Create Your Account
            </p>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <small className='form-text'>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>

              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  name='cpassword'
                  value={cpassword}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <input
                type='submit'
                name='signup'
                className='btn btn-primary'
                value='Register'
              />
            </form>
            <p className='my-1'>
              Already have an account? <NavLink to='/login'>Sign In</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register, setAlert })(Register);
