import React from 'react';

const SingleJobDetails = ({ presentJob }) => {
    const { jd, experiences, salary, jobTitle, email } = presentJob
    return (
        <div className='flex justify-center items-start '>
            <div className='w-3/4'>
                <h2> <span className='font-bold text-xl'>Job Description:</span> {jd}</h2>
                <h2><span className='font-bold text-xl'>Experience:</span> {experiences}</h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <div className='bg-indigo-50 w-full p-3 rounded-md'>
                <h2 className='font-bold text-xl'>Job Details</h2>
                <h1><span className='font-semibold text-md'>Salary:</span> {salary}</h1>
                <h1><span className='font-semibold text-md'>Job Title:</span> {jobTitle}</h1>
                <h2 className='font-bold text-xl'>Contact Information</h2>
                <h1><span className='font-semibold text-md'>Email:</span> {email}</h1>
            </div>
            <div>
                <button className='btn-apply mt-5'>Apply Now</button>
            </div>
            </div>
        </div>
    );
};

export default SingleJobDetails;