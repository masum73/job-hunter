import React, { useContext, useState } from 'react';
import CommonBanner from './Banner/CommonBanner';
import { getStoredCart } from '../utilities/fakeDb';
import { JobContext } from '../App';
import SingleAppliedJob from './SingleAppliedJob';

const AppliedJobs = () => {
    const cartJobs = getStoredCart();
    const jobs = useContext(JobContext);
    const [filter, setFilter] = useState(null);

    let appliedJobs = jobs.filter(job => cartJobs[job.id])
    
    if(filter){
        appliedJobs = appliedJobs.filter(job => job.type === filter)
    }


    return (
        <>
            <CommonBanner title='Applied Jobs'></CommonBanner>
            <div className='flex flex-col justify-center items-center mx-auto py-96'>
                <button onClick={()=> setFilter('Remote')} className='btn-primary'>Remote</button>
                <button onClick={()=> setFilter('Onsite')} className='btn-primary'>on-Site</button>
            {
                appliedJobs.map(aJob => <SingleAppliedJob
                key={aJob.id}
                aJob={aJob}
                ></SingleAppliedJob>)
            }
            </div>
        </>
    );
};

export default AppliedJobs;