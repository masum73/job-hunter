import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header></Header>
      <div className='md:min-h-[calc(100vh-200px)]'>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;