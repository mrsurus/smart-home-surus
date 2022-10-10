import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header'
import Footer from '../Footer'

export const ProductContext = createContext([])
export const CartContext = createContext([])
const Main = () => {
    const {products,initialCart} = useLoaderData()
    const [cart, setCart] = useState(initialCart)
    return (
        <CartContext.Provider value={[cart,setCart]}>
            <ProductContext.Provider value={products}>
           
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            
       </ProductContext.Provider>
        </CartContext.Provider>
       
       
    );
};

export default Main;