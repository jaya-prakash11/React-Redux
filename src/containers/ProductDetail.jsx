import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchSelectedProduct,
  removeSelectedProduct,
  selectedProduct,
} from "../Redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    if (productId && productId !== "")
      dispatch(fetchSelectedProduct(productId));

    return () => {
      console.log("when componnet destorys");
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const productDetail = useSelector((state) => state.product);

  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div className="ui grid">
        <div className="six wide column">
          <div
            className="ui segment"
            style={{ padding: "20px", textAlign: "center" }}
          >
            <img
              src={productDetail.image}
              alt={productDetail.title}
              style={{
                maxWidth: "100%",
                maxHeight: "500px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        <div className="ten wide column">
          <div className="ui segment">
            <div className="ui breadcrumb">
              <a className="section">Home</a>
              <i className="right angle icon divider"></i>
              <a className="section">{productDetail.category}</a>
              <i className="right angle icon divider"></i>
              <div className="active section">Product</div>
            </div>

            <h1 className="ui header" style={{ marginTop: "20px" }}>
              {productDetail.title}
            </h1>

            <div className="ui divider"></div>

            <div style={{ marginBottom: "15px" }}>
              <span style={{ fontSize: "14px", color: "#888" }}>
                Category:{" "}
              </span>
              <span className="ui label">{productDetail.category}</span>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <i className="star icon" style={{ color: "#f2c611" }}></i>
              <strong>{productDetail?.rating?.rate}</strong>
              <span style={{ color: "#888", marginLeft: "10px" }}>
                ({productDetail?.rating?.count} reviews)
              </span>
            </div>

            <h2
              className="ui header"
              style={{ color: "#21ba45", marginBottom: "20px" }}
            >
              ${productDetail.price}
            </h2>

            <div className="ui divider"></div>

            <h4 className="ui header">Description</h4>
            <p style={{ lineHeight: "1.6", color: "#555" }}>
              {productDetail.description}
            </p>

            <div className="ui divider"></div>

            <div style={{ marginTop: "30px" }}>
              <h4 className="ui header">Quantity</h4>
              <div className="ui action input">
                <button className="ui icon button">
                  <i className="minus icon"></i>
                </button>
                {/* <input
                  type="text"
                  readOnly
                  style={{ width: "80px", textAlign: "center" }}
                />
                <button className="ui icon button">
                  <i className="plus icon"></i>
                </button> */}
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <button className="ui large primary button">
                <i className="shopping cart icon"></i>
                Add to Cart
              </button>
              <button className="ui large button">
                <i className="heart outline icon"></i>
                Add to Wishlist
              </button>
            </div>

            <div className="ui message" style={{ marginTop: "30px" }}>
              <div className="header">
                <i className="truck icon"></i>
                Free Shipping
              </div>
              <p>Free shipping on orders over $50</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ui segment" style={{ marginTop: "30px" }}>
        <h3 className="ui header">Customer Reviews</h3>
        <div className="ui comments">
          <div className="comment">
            <a className="avatar">
              <img src="https://via.placeholder.com/50" alt="avatar" />
            </a>
            <div className="content">
              <a className="author">John Doe</a>
              <div className="metadata">
                <span className="date">2 days ago</span>
                <span className="rating">
                  <i className="star icon"></i>5 stars
                </span>
              </div>
              <div className="text">
                Great quality t-shirt! The fit is perfect and the fabric is
                really comfortable.
              </div>
            </div>
          </div>
          <div className="comment">
            <a className="avatar">
              <img src="https://via.placeholder.com/50" alt="avatar" />
            </a>
            <div className="content">
              <a className="author">Jane Smith</a>
              <div className="metadata">
                <span className="date">5 days ago</span>
                <span className="rating">
                  <i className="star icon"></i>4 stars
                </span>
              </div>
              <div className="text">
                Nice shirt, fits as expected. Would recommend!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
