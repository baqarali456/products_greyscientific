import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { ProductContextProvider } from './context/context'
import { Outlet } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  const handleProducts = (value)=>{
    setProducts(value);
  }

  useEffect(()=>{
   const products = JSON.parse(localStorage.getItem("products"))
   if(products && products.length > 0){
    setProducts(products)
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("products",JSON.stringify(products));
  },[products])

  return (
    <ProductContextProvider value={{handleProducts,products}}>
    <Navbar/>
    <div className=' container my-4'>
      <Outlet/>

    </div>
    </ProductContextProvider>
  )
}

export default App
