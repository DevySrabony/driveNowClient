import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
const Home = () => {
    // const jobsPromise = fetch('http://localhost:5000/jobs')
    // .then(res =>res.json())
    return (
        <div>
            <Banner></Banner>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;