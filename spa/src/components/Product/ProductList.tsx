import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, createProduct, deleteProduct, modifyProduct } from '../../states/actions/productActions';
import { RootState, AppDispatch } from '../../store/store';
import Button from '@mui/material/Button';
import ProductCard from './ProductCard'
import CircularProgress from '@mui/material/CircularProgress';

const ProductList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    const newProduct = {
      title: 'Sample Product',
      price: 19.99,
      description: 'This is a sample product',
    };
    dispatch(createProduct(newProduct));
  };

  const handleDeleteProduct = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdateProduct = (id: number) => {
    const updatedProduct = {
      title: 'Updated Product Title',
      price: 29.99,
      description: 'Updated product description',
    };
    dispatch(modifyProduct(id, updatedProduct));
  };

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <Button onClick={handleAddProduct}>Add Product</Button>
      {
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            onUpdate={handleUpdateProduct}
            onDelete={handleDeleteProduct}
          />
        ))
      }
    </div>
  );
};

export default ProductList;
