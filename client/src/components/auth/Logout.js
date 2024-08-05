// import React from 'react';
// import  { useContext } from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../App';
// const Logout = (props) => {
//   const { state, dispatch } = useContext(UserContext);
//   const navigate = useNavigate();
//   useEffect(() => {
//     fetch('/logout', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include',
//     })
//       .then((res) => {
//         dispatch({ type: 'USER', payload: false });
//         window.alert('logout successful');
//         navigate('/', { replace: true });

//         if (!res.status === 200) {
//           const error = new Error(res.error);
//           throw error;
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

//   return (
//     <section className="landing">
//       <div className="dark-overlay">
//         <div className="landing-inner">
//           <p className="x-large">GOOD BYE</p>
         
//           <h2>{"WE ARE THE MERN DEVELOPERS. CREATE A DEVELOPERS PROFILE/PORTFOLIO, SHARE POSTS AND GET HELP FROM OTHER DEVELOPERS" }
//           </h2>
         
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Logout;
