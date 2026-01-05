import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItem = useSelector((state)=> state.cart.items)
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          My Store
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-logo">
            Home
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart
            <span className="cart-count">{cartItem.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
