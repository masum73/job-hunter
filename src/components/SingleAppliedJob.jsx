import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({ aJob }) => {
    const { id, companyLogo, jobTitle, companyName, type, time, location, salary } = aJob
    return (
        <div className='flex  justify-between items-center mx-auto border rounded-md w-full p-5 my-3 border-gray-300'>
            <div className='flex w-11/12'>
                <div className='w-48 h-48 flex justify-center items-center bg-slate-100 rounded-md'>
                    <img className='' src={companyLogo} alt="" />
                </div>
                <div className='px-12'>
                    <h2 className='text-xl font-semibold'>{jobTitle}</h2>
                    <h2 className='my-2'>{companyName}</h2>
                    <div className='flex justify-start items-center py-3'>
                        <h2 className='border rounded-md text-indigo-500 border-indigo-500 mr-5 p-2'>{type}</h2>
                        <h2 className='border rounded-md text-indigo-500 border-indigo-500 p-2'>{time}</h2>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src="https://i.ibb.co/DwwJGpZ/Location-Icon.png" alt="" />
                        <h2>{location}</h2>
                        <img src="https://i.ibb.co/qR8gRHx/Frame.png" alt="" />
                        <h2>Salary: {salary}</h2>
                    </div>
                </div>
            </div>

            <Link to={`/job/${id}`}><button className='btn-primary w-48'>View Details</button></Link>

        </div>
    );
};

export default SingleAppliedJob;