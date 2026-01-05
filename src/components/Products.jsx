import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import { getProducts } from "../actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  console.log(useSelector((state) => state.products.items));

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <Skeleton />;
  }
  return (
    <div className="product-grid">
      {items.map((product) => {
        console.log(product);

        return (
          <div className="product-card">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <h2 className="product-title">{product.title}</h2>
            <div className="product-footer">
              <p className="product-price">{product.price}</p>
              <button
                className="add-button"
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
