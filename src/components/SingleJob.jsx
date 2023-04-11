import React from 'react';

const SingleJob = ({ job }) => {
    const { companyLogo, jobTitle, companyName, type, time, location, salary } = job;
    return (
        <div className='flex flex-col justify-center items-start mx-auto border border-gray-500 w-96 p-5'>
            <img className='mb-5' src={companyLogo} alt="" />
            <h2 className='text-xl font-semibold'>{jobTitle}</h2>
            <h2 className='my-2'>{companyName}</h2>
            <div className='flex justify-center items-center'>
                <h2 className='border text-indigo-500 border-indigo-500 mr-5 p-2'>{type}</h2>
                <h2 className='border text-indigo-500 border-indigo-500 p-2'>{time}</h2>
            </div>
            <div className='flex justify-center items-center gap-2'>
                {/* <img src="../assets/Icons/Location Icon.png" alt="" /> */}
                <h2>{location}</h2>
                {/* <img src="../assets/Icons/Frame.png" alt="" /> */}
                <h2>{salary}</h2>
            </div>
            <button className='btn-primary'>View Details</button>
        </div>
    );
};

export default SingleJob;