import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full absolute'>
            <div className='flex flex-col md:flex-row justify-between items-center mx-auto py-5 bg-transparent  w-2/3'>
                <div>
                    <Link to='/' aria-label='JobHunter' title='JobHunter' className=' text-3xl font-bold'
                    >Job Hunter</Link>
                </div>

                <div className='flex flex-col md:flex-row gap-12'>
                    <NavLink to='/statistics' aria-label='statistics' title='statistics'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Statistics
                    </NavLink>
                    <NavLink to='/appliedjobs' aria-label='appliedjobs' title='appliedjobs'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Applied Jobs
                    </NavLink>
                    <NavLink to='/blog' aria-label='blog' title='blog'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Blog
                    </NavLink>
                </div>

                <div>
                    <button type='button' className='btn-primary'>Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;