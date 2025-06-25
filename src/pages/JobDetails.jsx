import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        hr_email,
        hr_name,
        company_logo
    } = useLoaderData();

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="flex items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <img src={company_logo} alt="Company Logo" className="w-16 h-16 rounded-xl object-contain mr-4" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
                        <p className="text-gray-600 dark:text-gray-300">{company} • {location}</p>
                    </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
                        <p><span className="font-semibold">Job Type:</span> {jobType}</p>
                        <p><span className="font-semibold">Category:</span> {category}</p>
                        <p><span className="font-semibold">Deadline:</span> {applicationDeadline}</p>
                        <p><span className="font-semibold">Salary:</span> {salaryRange.min}–{salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">Job Description</h2>
                        <p className="text-gray-700 dark:text-gray-300">{description}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">Requirements</h2>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            {requirements.map((req, i) => <li key={i}>{req}</li>)}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">Responsibilities</h2>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            {responsibilities.map((res, i) => <li key={i}>{res}</li>)}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-md font-semibold text-gray-800 dark:text-gray-100">HR Contact</h2>
                        <p className="text-gray-700 dark:text-gray-300">{hr_name} — <a href={`mailto:${hr_email}`} className="text-blue-500 underline">{hr_email}</a></p>
                    </div>
                </div>

                {/* Apply Button */}
                <div className="px-6 pb-6">
                    <Link to={`/jobApply/${_id}`}>
                    <button
                     className="w-full md:w-auto bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Apply Now
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
