import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full absolute'>
            <div className='flex flex-col md:flex-row justify-between items-center mx-auto py-5 bg-transparent  w-2/3'>



                <div>
                    <Link to='/' aria-label='JobHunter' title='JobHunter' className=' text-3xl font-bold'
                    >Job Hunter</Link>
                </div>

                <div onClick={() => setOpen(!open)} className='md:hidden my-3'>
                    {/* <span>{open === true ? 'open' : 'close'}</span> */}
                    <span>{open === true ?
                        <XMarkIcon className="h-6 w-6 text-indigo-500" />
                        : <Bars3Icon className="h-6 w-6 text-indigo-500" />
                    }</span>
                </div>
                <ul className={` flex flex-col md:hidden  absolute md:static duration-500 bg-indigo-400 px-8 py-2 ${open ? 'top-24' : '-top-36'}`}>
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
                </ul>


                <div className='hidden md:flex flex-col md:flex-row gap-12'>
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