import React, {  useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error('Error fetching jobs:', err));
    }, []);
    return (
        <div>
            <h2 className='text-4xl font-bold my-5'>Hot Jobs!!!!</h2>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
         </div>
        </div>
    );
};

export default HotJobs;