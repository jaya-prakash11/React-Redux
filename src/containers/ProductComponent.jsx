import React from "react";
import { Link } from "react-router-dom";

function ProductComponent(res) {
  console.log("inside Product Component", res);

  const { id, category, image, price, rating, title } = res.data;
  return (
    <div className="ui link card">
      <Link to={`/product/${id}`}>
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">{category}</div>
          <div className="description">
            ⭐ {rating.rate} ({rating.count})
          </div>
        </div>
        <div className="extra content">
          <strong>${price}</strong>
        </div>
      </Link>
    </div>
  );
}

export default ProductComponent;
