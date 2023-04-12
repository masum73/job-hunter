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

    if (filter) {
        appliedJobs = appliedJobs.filter(job => job.type === filter)
    }

    return (
        <>
            <CommonBanner title='Applied Jobs'></CommonBanner>
            <div className='' >
                <div className='flex justify-end items-end gap-3 pt-96 mx-auto w-2/3'>
                    <button onClick={() => setFilter('Remote')} className='btn-primary'>Remote</button>
                    <button onClick={() => setFilter('Onsite')} className='btn-primary'>On-Site</button>
                </div>
                <div className='flex flex-col justify-center items-center py-5 w-2/3 mx-auto'>
                {
                    appliedJobs.map(aJob => <SingleAppliedJob
                        key={aJob.id}
                        aJob={aJob}
                    ></SingleAppliedJob>)
                }
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;