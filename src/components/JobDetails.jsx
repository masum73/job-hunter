import React, { useContext } from 'react';
import { JobContext } from '../App';
import CommonBanner from './Banner/CommonBanner';
import SingleJobDetails from './SingleJobDetails';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useContext(JobContext)
    const params = useParams()
    
    const presentJob = jobs.find(pJob => parseInt(params.id) === pJob.id)

    return (
        <>
            <CommonBanner title='Job Details'></CommonBanner>
            <div className='w-9/12 mx-auto'>
                <div className='py-96'>
                    <SingleJobDetails 
                    presentJob = {presentJob}
                    ></SingleJobDetails>
                </div>
            </div>
        </>
    );
};

export default JobDetails;