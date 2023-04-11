import React from 'react';

const SingleCategory = ({category}) => {
    const {categoryLogo, categoryName, jobsAvailable} = category;
    return (
        <div className='bg-indigo-100 w-auto p-8 border rounded-md'>
            <img className='bg-indigo-200 p-2' src={categoryLogo} alt="" />
            <h2 className='font-bold text-xl my-2'>{categoryName}</h2>
            <p>{jobsAvailable}</p>
        </div>
    );
};

export default SingleCategory;