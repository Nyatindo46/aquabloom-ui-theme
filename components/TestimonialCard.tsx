
import React from 'react';
import type { Testimonial } from '../types';
import { Icon } from './Icon';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-card shadow-subtle text-center flex flex-col items-center">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon key={index} name="star" className={`w-5 h-5 ${index < testimonial.rating ? 'text-aloe-green' : 'text-gray-300'}`} />
        ))}
      </div>
      <p className="text-soft-gray-blue italic mb-4">"{testimonial.quote}"</p>
      <p className="font-bold text-charcoal-navy">- {testimonial.author}</p>
    </div>
  );
};
