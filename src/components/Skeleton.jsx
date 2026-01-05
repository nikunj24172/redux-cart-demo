import React from "react";

const Skeleton = () => {
  const skeletons = Array.from({ length: 10 });
  return (
    <div className="product-skeleton-grid">
     {skeletons.map((_, i) => (
        <div className="product-skeleton-card" key={i}>
          <div className="skeleton skeleton-img"></div>
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-price"></div>
          <div className="skeleton skeleton-btn"></div>
        </div>
      ))}
    </div>
  );
};


export default Skeleton