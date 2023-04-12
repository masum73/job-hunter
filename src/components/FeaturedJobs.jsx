import React, { useContext, useState } from 'react';
import { JobContext } from '../App';
import SingleJob from './SingleJob';

const FeaturedJobs = () => {
    const jobs = useContext(JobContext);

    const [seeAllButtonClicked, setSeeAllButtonClicked] = useState(false)

    return (
        <div className='w-9/12 mx-auto'>
            <div className='flex flex-col justify-center items-center mt-10 mx-auto'>
                <h2 className='text-5xl font-bold'>Featured Jobs</h2>
                <p className='py-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 place-content-center place-items-center gap-3'>
                {
                    jobs.slice(0 , seeAllButtonClicked ? jobs.length : 4).map(job => <SingleJob
                        key={job.id}
                        job={job}
                    ></SingleJob>)
                }
            </div>
            <div className='flex justify-center items-center my-5'>
                <button onClick={()=> setSeeAllButtonClicked(true)} className='btn-primary'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;