import { useParams } from "react-router-dom"
import { useProductContext } from "../context/context";
import ProductCard from "../components/ProductCard";

function SearchProductByName() {
    const {search} = useParams();
    const {products=[]} = useProductContext();
    const filteredProducts = products.filter((prod)=> prod.Name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
     <h1 className=' text-center'>Search Products By Name: {search}</h1>
      {
        filteredProducts.length > 0 ?(
            <div className=' d-flex flex-wrap gap-4 '>
                {
                    filteredProducts.map((product)=>(
                        <ProductCard key={product.id} {...product}/>
                    ))
                }

            </div>
        ) : <h2 className=' text-center my-2'>No products in Product List</h2>
      }
    </>
  )
}

export default SearchProductByName;