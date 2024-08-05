import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  // redirect IFF LOGIN IN
  if (isAuthenticated) {
    return (
      <Navigate to="/dashboard" replace={true} />
    )
  }
  return (
    <div className='landing'>
      <div className='dark-overlay'>
        <div className='landing-innnerr'>
          <div id='cardss'>
            <h1 className='large text-primary'>Sign In</h1>
            <p className='lead'>
              <i className='fas fa-user' /> Log In To Your Account
            </p>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <input
                type='submit'
                className='btn btn-primary'
                value='Login'
               
              />
            </form>
            <p className='my-1'>
              Don't have an account? <NavLink to='/register'>Sign Up</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
