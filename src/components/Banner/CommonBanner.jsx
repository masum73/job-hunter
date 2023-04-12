import React from 'react';

const CommonBanner = (props) => {
    return (
        <div className='absolute w-full bg-transparent -z-10'>
            <img className='absolute right-0' src="https://i.ibb.co/ZLPHc5Z/Vector-1.png" alt="" />
            <div className='bg-indigo-50 h-80 flex justify-center items-center'>
                <h2 className='text-3xl font-bold'>{props.title}</h2>
            </div>
            <img className='absolute bottom-0' src="https://i.ibb.co/mtmZbyP/Vector.png" alt="" />
        </div>

    );
};

export default CommonBanner;