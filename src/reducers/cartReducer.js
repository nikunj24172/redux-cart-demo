const initialState = {
  items: [],
  totalAmount: 0,
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const exists = state.items.find((item) => item.id === product.id);
      let updatedItems;
      if (exists) {
        updatedItems = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...product, quantity: 1 }];
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount: calculateTotal(updatedItems),
      };
    }

    case "INCREMENT_QUANTITY": {
      const updatedItem = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      return {
        ...state,
        items: updatedItem,
        totalAmount: calculateTotal(updatedItem),
      };
    }


    case "DECREMENT_QUANTITY":{
        const updatedItems = state.items.map((item)=> item.id === action.payload ?{...item,quantity: item.quantity-1}:item).filter((item)=> item.quantity>0);

        return{
            ...state,
            items:updatedItems,
            totalAmount: calculateTotal(updatedItems)
        }
    }

    case "REMOVE_FROM_CART":{
        const updatedItems = state.items.filter((item)=> item.id !== action.payload);
        return {
            ...state,
            items:updatedItems,
            totalAmount: calculateTotal(updatedItems)
        }
    }
    default:
      return state;
  }
};

export default cartReducer