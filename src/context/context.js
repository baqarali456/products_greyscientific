import { createContext,useContext } from "react";

const ProductContext = createContext({
    products:[],
    handleProducts(){},
})

const ProductContextProvider = ProductContext.Provider;

const useProductContext = () =>useContext(ProductContext)

export {
    ProductContextProvider,
    useProductContext,
}