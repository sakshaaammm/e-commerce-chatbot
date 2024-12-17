import React from 'react';
import { Product } from '../types';
import { formatPrice } from '../utils/formatters';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-pink-200 p-4 bg-white/50 hover:bg-white/80 transition-colors duration-200">
      <img 
        src={product.image} 
        alt={product.name}
        className="h-20 w-20 rounded-lg object-cover shadow-sm"
      />
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="mt-1 text-lg font-bold text-pink-600">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
};