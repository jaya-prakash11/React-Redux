import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import axios from "axios";
import { fetchProducts, setProducts } from "../Redux/actions/productActions";

function ProductListing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const allProducts = useSelector((state) => state.allProducts.products);

  return (
    <div className="product-container">
      {allProducts.map((res) => (
        <ProductComponent data={res} />
      ))}
    </div>
  );
}

export default ProductListing;
