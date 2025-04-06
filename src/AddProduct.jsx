import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { createProduct } from "./productSlice";

const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(product);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='text'
        placeholder='Product Name'
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        className='w-full p-2 border rounded'
      />
      <input
        type='number'
        placeholder='Price'
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        className='w-full p-2 border rounded'
      />
      <button
        type='submit'
        className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition'
      >
        Submit
      </button>
    </form>
  );
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = (product) => {
    dispatch(createProduct(product));
    navigate("/");
  };

  return (
    <div className='max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10'>
      <div className='flex items-center mb-6'>
        <button
          onClick={() => navigate("/")}
          className='flex items-center gap-2 text-blue-500 hover:text-blue-700 transition'
        >
          <FiArrowLeft /> Back to Products
        </button>
      </div>
      <h2 className='text-3xl font-semibold text-gray-900 mb-6'>
        Add New Product
      </h2>
      <div className='p-6 bg-gray-50 rounded-lg shadow-inner'>
        <ProductForm onSubmit={handleAddProduct} />
      </div>
    </div>
  );
};

export default AddProduct;
