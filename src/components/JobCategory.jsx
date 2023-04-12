import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('jobscategory.json')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])

    return (

        <div className='w-9/12 mx-auto'>
            <div className='flex flex-col justify-center items-center mt-10 mx-auto'>
                <h2 className='text-5xl font-bold'>Job Category List</h2>
                <p className='py-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            {/* dynamic category will be here */}
            <div className='flex flex-col md:flex-row w-full justify-center items-center mx-auto p-5 gap-5'>
                {
                    categories.map(category => <SingleCategory
                    key={category.id}
                    category = {category}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategory;