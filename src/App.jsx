import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';

export const JobContext = createContext([])
export const CartContext = createContext([])

const App = () => {
  const { jobs, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  return (
    <JobContext.Provider value={jobs}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <div className='md:min-h-[calc(100vh-200px)]'>
          <Outlet />
        </div>
        <Footer></Footer>
      </CartContext.Provider>
    </JobContext.Provider>
  );
};

export default App;