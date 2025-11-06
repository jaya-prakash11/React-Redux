import { useState } from "react";
import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing.jsx";
import ProductDetail from "./containers/ProductDetail.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
