import React, { useContext } from 'react';
import { JobContext } from '../App';
import CommonBanner from './Banner/CommonBanner';
import SingleJobDetails from './SingleJobDetails';

const JobDetails = () => {
    const jobs = useContext(JobContext)
    return (
        <>
            <CommonBanner title='Job Details'></CommonBanner>
            <div className='w-9/12 mx-auto'>
                <div className='py-96'>
                    <h2>Job Details: {jobs.length}</h2>
                    {
                        jobs.map(job => <SingleJobDetails
                        key={job.id}
                        job={job}
                        ></SingleJobDetails>)
                    }
                </div>
            </div>
        </>
    );
};

export default JobDetails;