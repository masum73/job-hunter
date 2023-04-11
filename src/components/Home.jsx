import React from 'react';
import HomeBanner from './Banner/HomeBanner';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;