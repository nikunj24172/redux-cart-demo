import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <p>Your Cart Is Empty</p>
      </div>
    );
  }
  return (
    <>
      <div className="cart-container">
        <h2 className="cart-title">Cart</h2>

        <div className="cart-list">
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />

              <div className="cart-item-info">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">₹{item.price}</p>
                <p className="item-total">
                  Total: ₹{item.price * item.quantity}
                </p>
              </div>

              <div className="cart-item-actions">
                <button
                  onClick={() =>
                    dispatch({ type: "DECREMENT_QUANTITY", payload: item.id })
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREMENT_QUANTITY", payload: item.id })
                  }
                >
                  +
                </button>
                <button
                  className="remove-button"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="cart-grand-total">Grand Total: ₹{totalAmount}</h2>
      </div>
    </>
  );
};
export default Cart;
