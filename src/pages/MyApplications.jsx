// import React, { use, useContext } from 'react';
// import ApplicationStats from './ApplicationStats';
// import ApplicationList from './ApplicationList';
// import { AuthContext } from '../Context/AuthContext';
// // import { myApplicationsPromise } from '../api/applicationsApi';
// const myApplicationsPromise = email =>{
//     return fetch(`http://localhost:5000/applications?email=${email}`).then(res =>res.json())
// }
// const MyApplications = () => {
//     const {user} = useContext(AuthContext)
//     return (
//         <div>
//             <ApplicationStats></ApplicationStats>
//             <ApplicationList
//                 myApplicationsPromise={myApplicationsPromise(user.email)}
//             ></ApplicationList>
//         </div>
//     );
// };

// export default MyApplications;

import React, { useEffect, useState, useContext } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import { AuthContext } from '../Context/AuthContext';

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/applications?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setApplications(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching applications:', error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading) return <p>Loading applications...</p>;

  return (
    <div>
      <ApplicationStats />
      <ApplicationList applications={applications} />
    </div>
  );
};

export default MyApplications;
