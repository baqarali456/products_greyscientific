import ProductForm from "../components/ProductForm";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/context";


function EditProduct() {
      
    const {id} = useParams();
    const {products=[]} = useProductContext();
    const product = products.find((prod)=> prod.id === Number(id));
    

  return (
    <div className='my-1'>
        <h1 className=' text-center '>Update Product Form</h1>
        <ProductForm product={product}  />

    </div>
  )
}

export default EditProduct