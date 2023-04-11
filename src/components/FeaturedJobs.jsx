import React, { useContext } from 'react';
import { JobContext } from '../App';
import SingleJob from './SingleJob';

const FeaturedJobs = () => {
    const jobs = useContext(JobContext);

    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-10 mx-auto'>
                <h2 className='text-5xl font-bold'>Featured Jobs</h2>
                <p className='py-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 justify-center items-center gap-6'>
                {
                    jobs.map(job => <SingleJob
                        key={job.id}
                        job={job}
                    ></SingleJob>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <button className='btn-primary'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;