const initialState = {
    items:[],
    status:"idle",
    error:null
};

const productReducer = (state = initialState,action) =>{
    switch(action.type){
        case "FETCH_PRODUCTS_REQUEST":
            return {...state,status:"loading"};
        case "FETCH_PRODUCTS_SUCCESS":
            return {...state,status:"succeeded",items:action.payload};
        case "FETCH_PRODUCTS_FAILURE":
            return {...state,status:"failed",error:action.payload}
        default:
            return state;
    }
}

export default productReducer;