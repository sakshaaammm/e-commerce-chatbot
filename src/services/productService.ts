import { Product } from '../types';
import { products } from '../data/products';

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductsByPriceRange = (min: number, max: number): Product[] => {
  return products.filter(p => p.price >= min && p.price <= max);
};

export const getPriceRange = (category: string): { min: number; max: number } => {
  const categoryProducts = getProductsByCategory(category);
  const prices = categoryProducts.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};