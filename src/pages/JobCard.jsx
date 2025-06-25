import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router';
const JobCard = ({job}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
        <div className='flex gap-2 '>
            <figure>
            <img
            src={job.company_logo}
            className='w-16'
            alt="Shoes" />
        </figure>
        <div>
            <h3 className='text-3xl'>{job.company}</h3>
            <p className='flex gap-1 items-center'><FaMapMarkerAlt /> {job.company}</p>
        </div>
        </div>
        <div className="card-body">
            <h2 className="card-title">
            {job.title}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Salary : {job.salaryRange.min}₹ - {job.salaryRange.max}₹</p>
            <p>{job.description}</p>
            <div className="card-actions">
                {
                    job.requirements.map((skill,index) =><div key={index} className="badge badge-outline">{skill}</div> )
                }
            </div>
             <div className="card-actions justify-end">
                <Link to={`/jobs/${job._id}`}><button className="btn bg-amber-500 text-white">Show Details</button></Link>
             </div>
        </div>
        </div>
    );
};

export default JobCard;