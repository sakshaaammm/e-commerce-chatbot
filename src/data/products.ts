import { Product } from '../types';

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Ultra HD Smart TV',
    description: '65-inch 4K Smart LED TV with HDR',
    price: 999.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800',
    stock: 10
  },
  {
    id: '2',
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Premium wireless headphones with active noise cancellation',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    stock: 15
  },
  {
    id: '3',
    name: 'Smartphone Pro Max',
    description: 'Latest flagship smartphone with 5G',
    price: 1099.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
    stock: 8
  },
  // Clothing
  {
    id: '4',
    name: 'Classic Denim Jacket',
    description: 'Vintage style denim jacket',
    price: 89.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800',
    stock: 20
  },
  {
    id: '5',
    name: 'Premium Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt',
    price: 29.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    stock: 50
  },
  // Opticals
  {
    id: '6',
    name: 'Designer Sunglasses',
    description: 'UV protection polarized sunglasses',
    price: 159.99,
    category: 'Opticals',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
    stock: 12
  },
  {
    id: '7',
    name: 'Blue Light Glasses',
    description: 'Computer glasses with blue light filter',
    price: 79.99,
    category: 'Opticals',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800',
    stock: 25
  }
];