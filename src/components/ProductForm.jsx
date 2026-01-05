import { useForm } from "react-hook-form";
import { useProductContext } from "../context/context";
import Input from "./Input";
import { useEffect, useState } from "react";



function ProductForm({product}) {

    const {handleProducts} = useProductContext();
  

    const {register,handleSubmit,setValue,formState:{errors}} = useForm({
        defaultValues:{
            Name:product?.Name || "",
            Price:product?.Price || "",
            Category:product?.Category || "",
            Stock:product?.Stock || 1,
            Description:product?.Description || '',
        }
    });

    const [successMessage,setSuccessMessage] = useState('');

    useEffect(()=>{
        let id;
        if(successMessage){
            id = setTimeout(()=>{
                setSuccessMessage('');
            },2000)
        }

        return ()=>clearTimeout(id);
    },[successMessage]);

    const handleFormProduct=(data)=>{
        setSuccessMessage('');
        if(product){
           handleProducts(prev=>prev.map(ele=>ele.id === product.id ? {...ele,...data}:ele))
           setSuccessMessage('Product updated successfully!');
        }
        else{
            handleProducts(prev=>[...prev,{id:Date.now(),...data}]);
            setSuccessMessage('Product added successfully!');

        }

        setValue('Name',"");
        setValue('Category',"");
        setValue('Price',"");
        setValue('Stock',1);
        setValue('Description',"");
    }


  return (
    <form onSubmit={handleSubmit(handleFormProduct)} className=' p-4 rounded shadow text-white bg-success'>
        <Input
         placeholder="Enter Name"
         label="Name"
         type="text"
         {...register('Name',{required:true,validate:value=>value.trim()!==""})}
        />
        <Input
         placeholder="Enter Price"
         label="Price"
         type="text"
         {...register('Price',{required:true,validate:value=>value.trim()!==""})}
        />
        <Input
         placeholder="Enter Category"
         label="Category"
         type="text"
         {...register('Category',{required:true,validate:value=>value.trim()!==""})}
        />
        <Input
         placeholder="Enter Stock"
         label="Stock"
         type="number"
         min={1}
         {...register('Stock',{required:true,min:1})}
        />
        <Input
         placeholder="Enter Description"
         label="Description"
         type="text"
         {...register('Description')}
        />

        {
            successMessage && <p className=" text-white bg-dark p-2 rounded">{successMessage}</p>
        }

        {
            Object.keys(errors).length > 0 && <p className=" text-white bg-danger p-2 rounded">Please Fill all the fields</p>
        }

        <button className=" btn btn-primary" type="submit">{product?"Update":"Add"}</button>
    </form>
  )
}

export default ProductForm;