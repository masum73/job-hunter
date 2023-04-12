import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, type, time, location, salary } = job;
    return (
        <div className='flex flex-col justify-center items-start mx-auto border border-gray-500 w-full p-5'>
            <img className='mb-5' src={companyLogo} alt="" />
            <h2 className='text-xl font-semibold'>{jobTitle}</h2>
            <h2 className='my-2'>{companyName}</h2>
            <div className='flex justify-center items-center  py-3'>
                <h2 className='border text-indigo-500 border-indigo-500 mr-5 p-2'>{type}</h2>
                <h2 className='border text-indigo-500 border-indigo-500 p-2'>{time}</h2>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <img src="/src/assets/Icons/Location Icon.png" alt="" />
                <h2>{location}</h2>
                <img src="/src/assets/Icons/Frame.png" alt="" />
                <h2>Salary: {salary}</h2>
            </div>
            <Link to={`/job/${id}`}><button className='btn-primary mt-3'>View Details</button></Link>

        </div>
    );
};

export default SingleJob;