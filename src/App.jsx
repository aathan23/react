import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListView from "./ProductListView";
import AddProduct from "./AddProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductListView />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
