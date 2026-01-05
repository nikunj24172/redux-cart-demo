import { fetchProducts } from "../services/productService";

export const getProducts = () =>{
    return async (dispatch) =>{
        dispatch({type:"FETCH_PRODUCTS_REQUEST"});
        try {
            const response = await fetchProducts();
            dispatch({type:"FETCH_PRODUCTS_SUCCESS", payload:response.data})
        } catch (error) {
            dispatch({type:"FETCH_PRODUCTS_FAILURE", payload:error.message})
        }
    }
}