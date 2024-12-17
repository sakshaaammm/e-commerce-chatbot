import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface Props {
  products: Product[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="space-y-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};