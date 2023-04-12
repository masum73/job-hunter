import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';

export const JobContext = createContext([])

const App = () => {
  const {jobs} = useLoaderData();

  return (
    <JobContext.Provider value={jobs}>
        <Header></Header>
        <div className='md:min-h-[calc(100vh-200px)]'>
          <Outlet />
        </div>
        <Footer></Footer>
    </JobContext.Provider>
  );
};

export default App;