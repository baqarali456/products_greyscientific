import { useState } from 'react'
import { useProductContext } from '../context/context';
import ProductCard from '../components/ProductCard';

function ProductList() {
    const {products=[]} = useProductContext();

    const [page,setPage] =useState(1);
    const limit = 5;

    const paginatedProducts = products.slice((page-1)*limit,limit * page);

    const handleNext = () => {
        setPage(page + 1);
    }
    const handlePrev = () => {
        setPage(page - 1);
    }


  return (
    <>
     <h1 className=' text-center'>Products</h1>
      {
        products.length > 0 ? (
            <div className=' d-flex flex-wrap gap-4 '>
                {
                    paginatedProducts.map((product)=>(
                        <ProductCard key={product.id} {...product}/>
                    ))
                }

            </div>
        ) : <h2 className=' text-center my-2'>No product in Product List</h2>
      }

      {products.length > 0 && <div className=' d-flex my-3 justify-content-between align-items-center text-white'>
        <button onClick={handlePrev} disabled={page === 1} className='btn btn-primary'>Prev</button>
        <p className=' align-self-center m-0 rounded bg-black shadow p-2  '>Page - {page}</p>
        <button disabled={products.slice(((page+1)-1)*limit,limit * (page + 1)).length === 0} onClick={handleNext}  className='btn btn-primary'>Next</button>
      </div>}
    </>
  )
}

export default ProductList;