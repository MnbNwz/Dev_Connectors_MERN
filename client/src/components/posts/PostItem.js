import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { addLike } from '../../actions/post';
import { removeLike } from '../../actions/post';
import { deletePost } from '../../actions/post';
import DeleteIcon from '@mui/icons-material/Delete';
const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <NavLink to={`/profile/${user}`}>
        <img className='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      </NavLink>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className="post-date">Posted on {formatDate(date)}</p>


      {showActions && <Fragment>
        <button
          onClick={(e) => addLike(_id)}
          type='button'
          className='btn btn-light'
        >
          <i>
            <ThumbUpAltIcon />
          </i>{' '}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          onClick={(e) => removeLike(_id)}
          type='button'
          className='btn btn-light'
        >
          <i>
            <ThumbDownIcon />
          </i>
        </button>
        <NavLink to={`/posts/${_id}`} className='btn btn-primary'>
          Discussion{' '}
          {comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </NavLink>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={(e) => deletePost(_id)}
            type='button'
            className='btn btn-danger'
          >
          Delete
            <i ><DeleteIcon /></i>
          </button>
        )}
      </Fragment>}
    </div>
  </div>
);
PostItem.defaultProps={
  showActions:true

}
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);

// import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Moment } from 'react-moment';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import { addLike } from '../../actions/post';
// import { removeLike } from '../../actions/post';
// import { deletePost } from '../../actions/post';

// const PostItem = ({
//   addLike,
//   removeLike,
//   deletePost,
//   auth,
//   post: { _id, text, name, avatar, user, likes, comments, date },
//   showActions,
// }) => (
//   <div className='post bg-white p-1 my-1'>
//     <div>
//       <NavLink to={`/profile/${user}`}>
//         <img className='round-img' src={avatar} alt='' />
//         <h4>{name}</h4>
//       </NavLink>
//     </div>
//     <div>
//       <p className='my-1'>{text}</p>
//       <p className='post-date'>
//         Posted on<Moment format='YYYY/MM/DD'>{date}</Moment>
//       </p>

//       {showActions && (
//         <Fragment>
//           <button
//             onClick={(e) => addLike(_id)}
//             type='button'
//             className='btn btn-light'
//           >
//             <i>
//               <ThumbUpAltIcon />
//             </i>{' '}
//             <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
//           </button>
//           <button
//             onClick={(e) => removeLike(_id)}
//             type='button'
//             className='btn btn-light'
//           >
//             <i>
//               <ThumbDownIcon />
//             </i>
//           </button>
//           <NavLink to={`/posts/${_id}`} className='btn btn-primary'>
//             Discussion{' '}
//             {comments.length > 0 && (
//               <span className='comment-count'>{comments.length}</span>
//             )}
//           </NavLink>
//           {!auth.loading && user === auth.user._id && (
//             <button
//               onClick={(e) => deletePost(_id)}
//               type='button'
//               className='btn btn-danger'
//             >
//               <i className='fas fa-times' />
//             </button>
//           )}
//         </Fragment>
//       )}
//     </div>
//   </div>
// );

// PostItem.defaultProps = {
//   showActions: true,
// };

// PostItem.propTypes = {
//   post: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
//   addLike: PropTypes.func.isRequired,
//   removeLike: PropTypes.func.isRequired,
//   deletePost: PropTypes.func.isRequired,
//   showActions: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
//   PostItem
// );
