import React from 'react';

const HomeBanner = () => {
    return (
        <div className='bg-indigo-50  w-full'>
            <div className='w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center py-24 md:py-12'>
                <div className='max-w-xl'>
                    <h3 className='text-7xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></h3>
                    <p className='my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div>
                    <img src="/src/assets/All Images/man.png" alt="" />
                </div>
            </div>


        </div>
    );
};

export default HomeBanner;