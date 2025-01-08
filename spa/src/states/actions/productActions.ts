import { AppDispatch } from '../../store/store';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProduct,
  removeProduct,
  updateProduct,
} from '../slices/productSlice';
import * as productApi from '../../api/productApi';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  dispatch(fetchProductsStart());
  try {
    const products = await productApi.getProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export const createProduct = (product: Omit<productApi.Product, 'id'>) => async (dispatch: AppDispatch) => {
  try {
    const newProduct = await productApi.addProduct(product);
    dispatch(addProduct(newProduct));
  } catch (error) {
    console.error('Error adding product:', error);
  }
};

export const modifyProduct = (id: number, updatedProduct: Omit<productApi.Product, 'id'>) => async (dispatch: AppDispatch) => {
  try {
    const updated = await productApi.updateProduct(id, updatedProduct);
    dispatch(updateProduct(updated));
  } catch (error) {
    console.error('Error updating product:', error);
  }
};

export const deleteProduct = (id: number) => async (dispatch: AppDispatch) => {
  try {
    await productApi.deleteProduct(id);
    dispatch(removeProduct(id));
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};
