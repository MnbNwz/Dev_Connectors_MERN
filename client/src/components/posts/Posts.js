import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../../actions/post';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import PostItem from './PostItem';
import PersonIcon from '@mui/icons-material/Person';
import PostForm from './PostForm';
const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <section className="container">

      <h1 className='large text-primary'> Posts</h1>
      <p className='lead text-primary'>
        <i>
          <PersonIcon />
        </i>
        Welcome To The Community
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProp = (state) => ({
  post: state.post,
});
export default connect(mapStateToProp, { getPosts })(Posts);
