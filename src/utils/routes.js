import { createBrowserRouter } from "react-router-dom"
import Home from '../components/Home'
import Main from '../components/layouts/Main'
import Shop from '../components/Shop'
import About from '../components/About'
import ErrorPage from '../components/ErrorPage'
import { productsAndCartData } from "../loders/getCart&ProductsData"
import Cart from "../components/Cart"

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      loader: productsAndCartData,
      children: [
        {index: true,element: <Home></Home>},
        {path: '/home',element: <Home></Home>},
        {path: '/shop',element: <Shop></Shop>},
        {path: '/cart',element: <Cart></Cart>},
        {path: '/about',element: <About></About>},
    
      ]
    }
    ])
