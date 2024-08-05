import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { getPost } from '../../actions/post';
import { connect } from 'react-redux';
import PostItem from '../posts/PostItem';
import { NavLink, useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
  const { id } = useParams();
  useEffect(() => {
    getPost(id);
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <section className='container'>
      <NavLink to='/posts' className='btn btn-primary'>
        Back To Posts
      </NavLink>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post.id} />
      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </section>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
