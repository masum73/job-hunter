import React from 'react';

const SingleAppliedJob = ({aJob}) => {
    const {type} = aJob
    return (
        <div>
            <p>{type}</p>
        </div>
    );
};

export default SingleAppliedJob;