import Product from '../models/Product.js';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const products = [
  {
    name: 'Classic Cotton Tee',
    description: 'A breathable everyday t-shirt made from 100% organic cotton.',
    price: 24.99,
    category: 'Essentials',
    gender: 'Unisex',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    images: ['https://via.placeholder.com/600x800?text=Classic+Cotton+Tee'],
    stock: 120,
    isFeatured: true,
    isNewArrival: false
  },
  {
    name: 'Oversized Street Hoodie',
    description: 'Heavyweight fleece hoodie with a relaxed streetwear fit.',
    price: 59.99,
    category: 'Streetwear',
    gender: 'Unisex',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Charcoal', 'Olive', 'Cream'],
    images: ['https://via.placeholder.com/600x800?text=Street+Hoodie'],
    stock: 75,
    isFeatured: true,
    isNewArrival: true
  },
  {
    name: 'Slim Fit Chinos',
    description: 'Versatile slim-fit chinos perfect for casual or smart-casual looks.',
    price: 44.99,
    category: 'Casual Wear',
    gender: 'Men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Navy', 'Black'],
    images: ['https://via.placeholder.com/600x800?text=Slim+Fit+Chinos'],
    stock: 90,
    isFeatured: false,
    isNewArrival: false
  },
  {
    name: 'Floral Summer Dress',
    description: 'Lightweight floral dress ideal for warm summer days.',
    price: 49.99,
    category: 'Casual Wear',
    gender: 'Women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Pink', 'Yellow', 'White'],
    images: ['https://via.placeholder.com/600x800?text=Floral+Summer+Dress'],
    stock: 60,
    isFeatured: true,
    isNewArrival: true
  },
  {
    name: 'Limited Edition Bomber Jacket',
    description: 'Exclusive bomber jacket from our limited seasonal drop.',
    price: 129.99,
    category: 'Limited Edition',
    gender: 'Unisex',
    sizes: ['M', 'L', 'XL'],
    colors: ['Black', 'Burgundy'],
    images: ['https://via.placeholder.com/600x800?text=Bomber+Jacket'],
    stock: 25,
    isFeatured: true,
    isNewArrival: true
  },
  {
    name: 'Essential Crew Socks (3-Pack)',
    description: 'Soft, durable crew socks in a convenient three-pack.',
    price: 14.99,
    category: 'Essentials',
    gender: 'Unisex',
    sizes: ['M', 'L'],
    colors: ['White', 'Black', 'Grey'],
    images: ['https://via.placeholder.com/600x800?text=Crew+Socks'],
    stock: 200,
    isFeatured: false,
    isNewArrival: false
  }
];

const seedProducts = async () => {
  try {
    // Only seed when no products exist yet
    const productCount = await Product.countDocuments();

    if (productCount > 0) {
      console.log(`✓ Products already seeded (${productCount} found)`);
      return;
    }

    const created = await Product.insertMany(products);
    console.log(`✓ Seeded ${created.length} products successfully`);
  } catch (error) {
    console.error('✗ Error seeding products:', error.message);
  }
};

export default seedProducts;
