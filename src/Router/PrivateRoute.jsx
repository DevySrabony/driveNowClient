import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user , loading} = use(AuthContext)
    const location = useLocation()
    if(loading){
        <h2>Loading.....</h2>
    }
    if(!user){
       return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;

// import React, { useContext } from 'react';
// import { AuthContext } from '../Context/AuthContext';
// import { Navigate, useLocation } from 'react-router'; // ✅ should be 'react-router-dom', not 'react-router'

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext); // ✅ useContext instead of use
//   const location = useLocation();

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

// export default PrivateRoute;
