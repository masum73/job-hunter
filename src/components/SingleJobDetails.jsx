import React from 'react';

const SingleJobDetails = ({job}) => {
    const {type} = job
    return (
        <div>
            <h2>{type}</h2>
        </div>
    );
};

export default SingleJobDetails;