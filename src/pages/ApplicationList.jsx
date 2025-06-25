import React, { use } from 'react';
import JobApplicationsRow from './JobApplicationsRow';

const ApplicationList = ({myApplicationsPromise}) => {
    const applications = use(myApplicationsPromise) 
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
     {
       applications.map((application,index) => <JobApplicationsRow
       key={application._id}
       index={index}
       application={application}>
       </JobApplicationsRow>)
     }
    
    </tbody>
   
  </table>
</div>
    );
};

export default ApplicationList;