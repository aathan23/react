import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "./productSlice";
import { FiPlus, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductListView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className='max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold text-gray-800'>Product List</h2>
        <button
          onClick={() => navigate("/add-product")}
          className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition'
        >
          <FiPlus /> Add Product
        </button>
      </div>

      {status === "loading" && <p className='text-gray-600'>Loading...</p>}
      {status === "failed" && <p className='text-red-500'>{error}</p>}

      <ul className='space-y-3'>
        {products.map((product) => (
          <li
            key={product.id}
            className='flex justify-between items-center p-4 bg-white rounded-lg shadow'
          >
            <span className='text-gray-800'>
              {product.name} - ${product.price}
            </span>
            <button
              onClick={() => handleDelete(product.id)}
              className='p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition'
            >
              <FiTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListView;
