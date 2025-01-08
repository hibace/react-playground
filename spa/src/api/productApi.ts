import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await axios.get<Product>(`${API_URL}/${id}`);
  return response.data;
};

export const addProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const response = await axios.post<Product>(API_URL, product);
  return response.data;
};

export const updateProduct = async (id: number, updatedProduct: Omit<Product, 'id'>): Promise<Product> => {
  const response = await axios.put<Product>(`${API_URL}/${id}`, updatedProduct);
  return response.data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
