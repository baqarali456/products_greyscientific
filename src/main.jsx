import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import ProductList from './pages/ProductList.jsx'
import AddProduct from './pages/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'
import SearchProductByName from './pages/SearchProductByName.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<ProductList/>
      },
      {
        path:"addproduct",
        element:<AddProduct/>
      },
      {
        path:"editproduct/:id",
        element:<EditProduct/>
      },
      {
        path:"searchproducts/:search",
        element:<SearchProductByName/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
