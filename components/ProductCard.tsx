
import React from 'react';
import type { Product } from '../types';
import { Button } from './Button';
import { Icon } from './Icon';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-card shadow-subtle overflow-hidden flex flex-col text-left transition-transform-shadow duration-300 ease-in-out hover:-translate-y-2 hover:shadow-card-hover motion-reduce:transition-none">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
         <div className="absolute top-4 right-4 bg-aloe-mist-white/80 backdrop-blur-sm text-charcoal-navy text-xs font-semibold px-3 py-1 rounded-full">
            {product.packaging}
         </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-semibold mb-2">{product.name}</h3>
        <ul className="space-y-2 mb-4 text-soft-gray-blue text-sm flex-grow">
          {product.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <Icon name="check" className="w-4 h-4 text-aloe-green mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-charcoal-navy">{product.price}</p>
          <Button className="px-6 py-2 text-sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};
