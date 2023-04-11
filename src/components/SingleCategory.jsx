import React from 'react';

const SingleCategory = ({category}) => {
    const {CategoryLogo, CategoryName, JobsAvailable} = category;
    return (
        <div className='bg-indigo-100 w-auto p-8 border rounded-md'>
            <img className='bg-indigo-200 p-2' src={CategoryLogo} alt="" />
            <h2 className='font-bold text-xl my-2'>{CategoryName}</h2>
            <p>{JobsAvailable}</p>
        </div>
    );
};

export default SingleCategory;