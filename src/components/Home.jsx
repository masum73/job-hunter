import React from 'react';
import HomeBanner from './Banner/HomeBanner';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </>
    );
};

export default Home;