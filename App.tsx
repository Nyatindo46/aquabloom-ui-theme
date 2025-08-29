
import React from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { ProductCard } from './components/ProductCard';
import { TestimonialCard } from './components/TestimonialCard';
import { Icon } from './components/Icon';
import type { Product, Testimonial } from './types';

const products: Product[] = [
  {
    name: 'Aloe Hydrate Mist',
    image: 'https://picsum.photos/id/111/400/400', // Abstract mist/water
    packaging: '150ml Recyclable Can',
    benefits: ['Instant Refreshment', 'Locks in Moisture', 'Sets Makeup'],
    price: '$22.00',
  },
  {
    name: 'Soothing Aloe Gel',
    image: 'https://picsum.photos/id/160/400/400', // Green/natural texture
    packaging: '200ml PET Jar',
    benefits: ['Calms Irritation', 'Soothes Sunburn', 'Lightweight Hydrator'],
    price: '$18.00',
  },
  {
    name: 'Aloe Repair Shampoo',
    image: 'https://picsum.photos/id/102/400/400', // Clean water/bath
    packaging: '300ml Bottle',
    benefits: ['Sulfate-Free', 'Strengthens Roots', 'Adds Natural Shine'],
    price: '$25.00',
  },
  {
    name: 'Aloe Restore Conditioner',
    image: 'https://picsum.photos/id/103/400/400', // Silky texture
    packaging: '300ml Bottle',
    benefits: ['Deeply Nourishing', 'Reduces Frizz', 'Detangles Effortlessly'],
    price: '$25.00',
  },
  {
    name: 'Aloe Glow Cream',
    image: 'https://picsum.photos/id/312/400/400', // Radiant skin/light
    packaging: '50ml Airless Pump',
    benefits: ['Boosts Radiance', 'Evens Skin Tone', 'Plumps & Firms'],
    price: '$32.00',
  },
  {
    name: 'Aloe Rescue Balm',
    image: 'https://picsum.photos/id/431/400/400', // Natural remedy/herb
    packaging: '100ml Metal Tin',
    benefits: ['Multi-Purpose Salve', 'Heals Dry Patches', 'Protects Skin Barrier'],
    price: '$28.00',
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "The Aloe Hydrate Mist is my daily essential. It feels like a splash of pure nature on my skin. I'm glowing!",
    author: 'Jessica M.',
    rating: 5,
  },
  {
    quote: "I've struggled with sensitive skin for years, and the Soothing Aloe Gel is the only thing that's truly calmed it down. A lifesaver!",
    author: 'David L.',
    rating: 5,
  },
  {
    quote: 'Finally, a shampoo and conditioner that leaves my hair soft without weighing it down. The scent is so clean and refreshing. Love Aquabloom!',
    author: 'Sarah K.',
    rating: 5,
  },
];

const App: React.FC = () => {
  return (
    <div className="bg-aloe-mist-white text-charcoal-navy overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
            id="home" 
            className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" 
            style={{ backgroundImage: `url('https://picsum.photos/id/106/1920/1080')` }}>
          <div className="absolute inset-0 bg-charcoal-navy opacity-40"></div>
          <div className="relative z-10 p-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight animate-fade-in-down">Hydration in Every Drop.</h1>
            <p className="text-lg md:text-xl font-sans mb-8 animate-fade-in-up">Pure by Nature, Bloom with Care.</p>
            <Button className="transform transition-transform duration-300 hover:scale-105">
              Shop Aloe Essentials
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-card overflow-hidden shadow-subtle">
              <img src="https://picsum.photos/id/1012/600/700" alt="Aloe Vera Plant" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-semibold mb-6">Born from Nature's Embrace</h2>
              <p className="text-soft-gray-blue mb-4 leading-relaxed">
                At Aquabloom, we believe that the best care comes from the purest sources. Our journey began with a single aloe vera plant and a simple mission: to harness its powerful, natural healing properties for your hair and skin.
              </p>
              <p className="text-soft-gray-blue leading-relaxed">
                We blend ancient wisdom with modern science to create gentle, effective formulas that hydrate, soothe, and restore. Every product is a testament to our commitment to purity, sustainability, and your natural radiance.
              </p>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section id="products" className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-semibold mb-4">Our Natural Collection</h2>
            <p className="text-soft-gray-blue max-w-2xl mx-auto mb-12">
              Discover our range of aloe-infused essentials, crafted to bring out your natural bloom.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-20 lg:py-32 bg-sand-beige/30">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-semibold mb-12">Voices of our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.author} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Promise */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-semibold mb-6">Nature’s touch, responsibly packaged.</h2>
              <p className="text-soft-gray-blue mb-8 leading-relaxed">
                We are committed to protecting the planet that provides for us. Our packaging is designed to be as kind to the earth as our products are to your skin.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="recycle" />
                  <p>Recyclable materials, from our cans to our bottles.</p>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="leaf" />
                  <p>100% Vegan formulas, always and forever.</p>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="heart" />
                  <p>Certified cruelty-free, because kindness is beautiful.</p>
                </div>
              </div>
            </div>
             <div className="rounded-card overflow-hidden shadow-subtle">
              <img src="https://picsum.photos/id/152/600/500" alt="Recyclable packaging" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <section className="py-20 lg:py-24 bg-aloe-green/10">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-semibold mb-4">Join the Bloom Club 🌿</h2>
            <p className="text-soft-gray-blue max-w-xl mx-auto mb-8">
              Get exclusive offers, skincare tips, and a first look at new products.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-aloe-green transition-shadow duration-300"
              />
              <Button type="submit" className="flex-shrink-0">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-navy text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-serif font-bold mb-2">Aquabloom</h3>
              <p className="text-soft-gray-blue text-sm">Pure by Nature, Bloom with Care.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-soft-gray-blue">
                <li><a href="#products" className="hover:text-aqua-blue transition-colors">Hair Care</a></li>
                <li><a href="#products" className="hover:text-aqua-blue transition-colors">Skin Care</a></li>
                <li><a href="#products" className="hover:text-aqua-blue transition-colors">Best Sellers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-soft-gray-blue">
                <li><a href="#about" className="hover:text-aqua-blue transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-aqua-blue transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-aqua-blue transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" aria-label="Instagram"><Icon name="instagram" className="fill-current text-soft-gray-blue hover:text-aqua-blue transition-colors" /></a>
                <a href="#" aria-label="Facebook"><Icon name="facebook" className="fill-current text-soft-gray-blue hover:text-aqua-blue transition-colors" /></a>
                <a href="#" aria-label="Twitter"><Icon name="twitter" className="fill-current text-soft-gray-blue hover:text-aqua-blue transition-colors" /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-soft-gray-blue/20 pt-8 text-center text-soft-gray-blue text-sm">
            <p>&copy; {new Date().getFullYear()} Aquabloom. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
