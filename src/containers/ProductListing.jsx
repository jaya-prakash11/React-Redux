import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../Redux/actions/productActions";

function ProductListing() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    let response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispatch(setProducts(response.data));
  }

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
