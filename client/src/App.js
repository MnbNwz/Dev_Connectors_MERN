import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.css';
import { loadUser } from './actions/auth';
import Posts from './components/posts/Posts';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import EditProfile from './components/profile-forms/EditProfile';
import CreateProfile from './components/profile-forms/CreateProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Post from './components/post/Post';
//redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Alert />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-profile' element={<CreateProfile />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/add-experience' element={<AddExperience />} />
          <Route path='/add-education' element={<AddEducation />} />
          <Route path='/profiles' element={<Profiles />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route element={<PrivateRoute />} />
          </Route>
          <Route path='/posts' element={<Posts />}>
            <Route element={<PrivateRoute />} />
          </Route>
          <Route path='/posts/:id' element={<Post />}>
            <Route element={<PrivateRoute />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
