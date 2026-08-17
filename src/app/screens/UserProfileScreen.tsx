import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { Avatar } from '../components/Avatar';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Mock data for different users
const userProfiles: Record<string, {
  name: string;
  businessType: string;
  distance: number;
  area: string;
  avatar: 'woman1' | 'woman2' | 'woman3' | 'woman4';
  quote: string;
  about: string;
  phone: string;
  email: string;
  isConnected: boolean;
  products: Array<{ name: string; price?: string; image: string }>;
  gallery: string[];
  reviews: Array<{ name: string; text: string; avatar: 'woman1' | 'woman2' | 'woman3' | 'woman4' }>;
  availability: string[];
  communities: string[];
}> = {
  // CONNECTED USERS (My People) - IDs 1-4
  '1': {
    name: 'Meera Patel',
    businessType: 'Home Baking',
    distance: 2.3,
    area: 'Indiranagar',
    avatar: 'woman1',
    quote: "I would be interested to learn things that would help grow my business",
    about: "I started baking from home 3 years ago and now specialize in custom cakes, cookies, and traditional Indian sweets. I use only premium ingredients and take pride in every order I fulfill.",
    phone: "+91 98765 43210",
    email: "meera.patel@example.com",
    isConnected: true,
    products: [
      { name: 'Custom Cakes', price: '₹800+', image: 'bakery cakes desserts display' },
      { name: 'Cookie Boxes', price: '₹350', image: 'homemade cookies box' },
      { name: 'Traditional Sweets', price: '₹500', image: 'indian sweets mithai' },
    ],
    gallery: [
      'cake decoration beautiful',
      'homemade cookies variety',
      'birthday cake custom',
      'dessert plating elegant',
    ],
    reviews: [
      { name: 'Kavita Singh', text: 'Great packaging and timely delivery!', avatar: 'woman2' },
      { name: 'Anjali Desai', text: 'The cakes are delicious and beautifully decorated.', avatar: 'woman3' },
    ],
    availability: ['Open to bulk orders', 'Festival availability', 'Open to collaborations'],
    communities: ['Bakers Community', 'Business Homemakers Network'],
  },
  '2': {
    name: 'Kavita Singh',
    businessType: 'Handmade Crafts',
    distance: 3.1,
    area: 'Koramangala',
    avatar: 'woman2',
    quote: "Creating unique handmade pieces brings me joy and independence",
    about: "I specialize in handmade jewelry, home décor items, and personalized gifts. Each piece is crafted with attention to detail and love, perfect for gifting or adding a personal touch to your home.",
    phone: "+91 98765 43211",
    email: "kavita.singh@example.com",
    isConnected: true,
    products: [
      { name: 'Handmade Jewelry', price: '₹250+', image: 'handmade jewelry earrings' },
      { name: 'Home Décor', price: '₹600', image: 'handmade home decor crafts' },
      { name: 'Personalized Gifts', price: '₹400+', image: 'personalized gift items' },
    ],
    gallery: [
      'handmade jewelry display',
      'craft items colorful',
      'home decoration handmade',
      'gift wrapping beautiful',
    ],
    reviews: [
      { name: 'Meera Patel', text: 'Beautiful craftsmanship! Loved the personalized touch.', avatar: 'woman1' },
      { name: 'Lakshmi Reddy', text: 'Amazing quality and unique designs.', avatar: 'woman1' },
    ],
    availability: ['Open to bulk orders', 'Open to collaborations', 'Custom orders welcome'],
    communities: ['Handmade Crafts Circle', 'Business Homemakers Network'],
  },
  '3': {
    name: 'Anjali Desai',
    businessType: 'Beauty Services',
    distance: 1.8,
    area: 'JP Nagar',
    avatar: 'woman3',
    quote: "Helping women feel confident and beautiful is my passion",
    about: "I offer professional beauty services from the comfort of your home. Specializing in bridal makeup, skincare, and hair styling, I bring quality salon services to you.",
    phone: "+91 98765 43212",
    email: "anjali.desai@example.com",
    isConnected: true,
    products: [
      { name: 'Bridal Makeup', price: '₹5,000+', image: 'bridal makeup indian' },
      { name: 'Hair Styling', price: '₹1,500', image: 'hair styling salon' },
      { name: 'Skincare Services', price: '₹800+', image: 'facial skincare treatment' },
    ],
    gallery: [
      'bridal makeup beautiful',
      'hair styling elegant',
      'skincare facial treatment',
      'makeup before after',
    ],
    reviews: [
      { name: 'Meera Patel', text: 'My bridal look was perfect! Thank you so much.', avatar: 'woman1' },
      { name: 'Kavita Singh', text: 'Professional and friendly service.', avatar: 'woman2' },
    ],
    availability: ['Bridal bookings', 'Home service available', 'Festival availability'],
    communities: ['Beauty Services Group', 'Business Homemakers Network'],
  },
  '4': {
    name: 'Lakshmi Reddy',
    businessType: 'Tailoring Services',
    distance: 2.8,
    area: 'Malleshwaram',
    avatar: 'woman1',
    quote: "Every stitch tells a story of care and precision",
    about: "With over 15 years of experience in tailoring and alterations, I provide custom stitching, blouse designs, and clothing alterations. I take pride in delivering perfect fits.",
    phone: "+91 98765 43214",
    email: "lakshmi.reddy@example.com",
    isConnected: true,
    products: [
      { name: 'Blouse Stitching', price: '₹500+', image: 'indian blouse design' },
      { name: 'Dress Alterations', price: '₹300', image: 'dress alterations tailoring' },
      { name: 'Custom Outfits', price: '₹1,500+', image: 'custom tailored clothing' },
    ],
    gallery: [
      'tailoring work display',
      'blouse designs indian',
      'dress alterations before after',
      'sewing machine work',
    ],
    reviews: [
      { name: 'Meera Patel', text: 'Perfect fit! She understood exactly what I wanted.', avatar: 'woman1' },
      { name: 'Anjali Desai', text: 'Excellent work and very reasonable prices.', avatar: 'woman3' },
    ],
    availability: ['Custom orders welcome', 'Urgent alterations available', 'Bridal work'],
    communities: ['Tailoring & Fashion Group', 'Business Homemakers Network'],
  },
  '9': {
    name: 'Radha Krishnan',
    businessType: 'Yoga Classes',
    distance: 2.1,
    area: 'BTM Layout',
    avatar: 'woman4',
    quote: "Yoga has transformed my life, and I love sharing it with others",
    about: "I offer personalized yoga sessions for women at home. Whether you're a beginner or experienced, I create custom programs focused on flexibility, strength, and mindfulness.",
    phone: "+91 98765 43218",
    email: "radha.krishnan@example.com",
    isConnected: true,
    products: [
      { name: 'Personal Sessions', price: '₹600/hour', image: 'yoga class woman' },
      { name: 'Group Classes', price: '₹300/session', image: 'yoga group class' },
      { name: 'Online Classes', price: '₹400/session', image: 'online yoga class' },
    ],
    gallery: [
      'yoga poses woman',
      'meditation peaceful',
      'yoga mat home',
      'stretching exercise',
    ],
    reviews: [
      { name: 'Meera Patel', text: 'Very patient and encouraging teacher!', avatar: 'woman1' },
      { name: 'Kavita Singh', text: 'I feel so much better after her classes.', avatar: 'woman2' },
    ],
    availability: ['Morning sessions', 'Evening sessions', 'Weekend batches'],
    communities: ['Beauty Services Group', 'Wellness Circle'],
  },
  '10': {
    name: 'Nisha Varma',
    businessType: 'Mehendi Artist',
    distance: 3.8,
    area: 'Rajajinagar',
    avatar: 'woman2',
    quote: "Every design tells a story of celebration and joy",
    about: "I specialize in bridal mehendi and contemporary designs. With 8 years of experience, I create beautiful, intricate patterns for weddings and special occasions.",
    phone: "+91 98765 43219",
    email: "nisha.varma@example.com",
    isConnected: true,
    products: [
      { name: 'Bridal Mehendi', price: '₹3,000+', image: 'bridal mehendi henna' },
      { name: 'Party Mehendi', price: '₹500+', image: 'mehendi design hands' },
      { name: 'Arabic Designs', price: '₹800+', image: 'arabic henna design' },
    ],
    gallery: [
      'mehendi bridal design',
      'henna hands beautiful',
      'arabic mehendi pattern',
      'mehendi foot design',
    ],
    reviews: [
      { name: 'Anjali Desai', text: 'Beautiful designs! My bridal mehendi was stunning.', avatar: 'woman3' },
      { name: 'Lakshmi Reddy', text: 'Very creative and professional.', avatar: 'woman1' },
    ],
    availability: ['Bridal bookings', 'Home service', 'Festival availability'],
    communities: ['Beauty Services Group', 'Bridal Services Network'],
  },
  '11': {
    name: 'Pooja Nair',
    businessType: 'Organic Spices',
    distance: 4.5,
    area: 'Yelahanka',
    avatar: 'woman3',
    quote: "Pure, organic spices from my kitchen to yours",
    about: "I make fresh, preservative-free spice blends and masalas at home. All products are made with organic ingredients sourced directly from farmers.",
    phone: "+91 98765 43220",
    email: "pooja.nair@example.com",
    isConnected: true,
    products: [
      { name: 'Garam Masala', price: '₹180', image: 'indian spices masala' },
      { name: 'Sambar Powder', price: '₹150', image: 'spice powder blend' },
      { name: 'Chai Masala', price: '₹120', image: 'chai tea spices' },
    ],
    gallery: [
      'spices jars colorful',
      'organic spices display',
      'masala powder variety',
      'spice grinding traditional',
    ],
    reviews: [
      { name: 'Meera Patel', text: 'The freshness is unmatched! Love the quality.', avatar: 'woman1' },
      { name: 'Kavita Singh', text: 'My curries taste so much better now.', avatar: 'woman2' },
    ],
    availability: ['Open to bulk orders', 'Custom blends', 'Gift packaging'],
    communities: ['Pickle & Snacks Makers', 'Organic Food Network'],
  },
  '12': {
    name: 'Geeta Rao',
    businessType: 'Catering Services',
    distance: 2.9,
    area: 'RT Nagar',
    avatar: 'woman1',
    quote: "Making every celebration memorable with delicious food",
    about: "I provide home-style catering for small to medium gatherings. Specializing in South Indian and North Indian cuisines, I bring authentic flavors to your events.",
    phone: "+91 98765 43221",
    email: "geeta.rao@example.com",
    isConnected: true,
    products: [
      { name: 'Small Party (20-30)', price: '₹8,000+', image: 'party food catering' },
      { name: 'Medium Event (50-75)', price: '₹15,000+', image: 'indian food buffet' },
      { name: 'Corporate Lunch', price: '₹200/person', image: 'lunch box catering' },
    ],
    gallery: [
      'catering food display',
      'indian buffet setup',
      'party food arrangement',
      'catering service event',
    ],
    reviews: [
      { name: 'Anjali Desai', text: 'Amazing food! Everyone loved it at my party.', avatar: 'woman3' },
      { name: 'Lakshmi Reddy', text: 'Professional service and great taste.', avatar: 'woman1' },
    ],
    availability: ['Party orders', 'Corporate events', 'Festival catering'],
    communities: ['Home Chefs Network', 'Catering Services Group'],
  },
  '13': {
    name: 'Shanti Devi',
    businessType: 'Embroidery Work',
    distance: 3.3,
    area: 'Vijayanagar',
    avatar: 'woman4',
    quote: "Traditional embroidery with a modern touch",
    about: "I create beautiful hand-embroidered pieces for clothing and home décor. Each piece is unique and crafted with traditional techniques passed down through generations.",
    phone: "+91 98765 43222",
    email: "shanti.devi@example.com",
    isConnected: true,
    products: [
      { name: 'Embroidered Blouses', price: '₹1,200+', image: 'embroidered blouse design' },
      { name: 'Cushion Covers', price: '₹500', image: 'embroidered cushion covers' },
      { name: 'Saree Borders', price: '₹800+', image: 'embroidered saree border' },
    ],
    gallery: [
      'embroidery work detailed',
      'hand embroidered fabric',
      'traditional embroidery design',
      'embroidery thread colorful',
    ],
    reviews: [
      { name: 'Kavita Singh', text: 'Exquisite work! So detailed and beautiful.', avatar: 'woman2' },
      { name: 'Anjali Desai', text: 'The quality is outstanding. Highly recommend!', avatar: 'woman3' },
    ],
    availability: ['Custom designs', 'Bulk orders', 'Bridal work'],
    communities: ['Handmade Crafts Circle', 'Traditional Arts Network'],
  },
  '14': {
    name: 'Latha Kumar',
    businessType: 'Tiffin Service',
    distance: 1.9,
    area: 'Basavanagudi',
    avatar: 'woman2',
    quote: "Healthy, homemade meals delivered fresh daily",
    about: "I run a tiffin service providing fresh, nutritious meals daily. My menu changes weekly and includes both South Indian and North Indian options.",
    phone: "+91 98765 43223",
    email: "latha.kumar@example.com",
    isConnected: true,
    products: [
      { name: 'Daily Lunch Tiffin', price: '₹120/day', image: 'lunch tiffin box' },
      { name: 'Weekly Package', price: '₹700/week', image: 'tiffin service meal' },
      { name: 'Monthly Plan', price: '₹2,500/month', image: 'homemade tiffin food' },
    ],
    gallery: [
      'tiffin box meal',
      'homemade food daily',
      'healthy lunch box',
      'tiffin service delivery',
    ],
    reviews: [
      { name: 'Meera Patel', text: 'Fresh food every day! Very reliable service.', avatar: 'woman1' },
      { name: 'Lakshmi Reddy', text: 'Tastes like home cooking. Love it!', avatar: 'woman1' },
    ],
    availability: ['Daily delivery', 'Weekly packages', 'Monthly subscriptions'],
    communities: ['Home Chefs Network', 'Tiffin Services Group'],
  },
  
  // NON-CONNECTED USERS (Radar) - IDs 5-8
  '5': {
    name: 'Priya Sharma',
    businessType: 'Pickles & Snacks',
    distance: 4.2,
    area: 'Jayanagar',
    avatar: 'woman4',
    quote: "Traditional recipes passed down through generations, made with love",
    about: "I make authentic homemade pickles, snacks, and traditional food items using my grandmother's recipes. All products are preservative-free and made with love.",
    phone: "+91 98765 43213",
    email: "priya.sharma@example.com",
    isConnected: false,
    products: [
      { name: 'Mango Pickle', price: '₹200', image: 'mango pickle jar' },
      { name: 'Namkeen Mix', price: '₹150', image: 'indian namkeen snacks' },
      { name: 'Papad Variety', price: '₹180', image: 'papad indian snack' },
    ],
    gallery: [
      'pickle jars variety',
      'homemade snacks indian',
      'traditional food items',
      'packaging homemade products',
    ],
    reviews: [
      { name: 'Customer', text: 'The mango pickle reminds me of home!', avatar: 'woman3' },
      { name: 'Customer', text: 'Fresh and authentic taste. Highly recommend!', avatar: 'woman4' },
    ],
    availability: ['Open to bulk orders', 'Festival availability', 'Custom spice levels'],
    communities: ['Pickle & Snacks Makers', 'Traditional Food Network'],
  },
  '6': {
    name: 'Rekha Menon',
    businessType: 'Homemade Meals',
    distance: 3.5,
    area: 'HSR Layout',
    avatar: 'woman2',
    quote: "Bringing the taste of home-cooked meals to busy families",
    about: "I prepare fresh, healthy homemade meals with authentic flavors. Specializing in South Indian and North Indian cuisines, I offer daily meal subscriptions and party orders.",
    phone: "+91 98765 43215",
    email: "rekha.menon@example.com",
    isConnected: false,
    products: [
      { name: 'Daily Meal Box', price: '₹150', image: 'indian lunch box meal' },
      { name: 'Party Orders', price: '₹500+', image: 'indian party food catering' },
      { name: 'Special Dishes', price: '₹200+', image: 'homemade indian food' },
    ],
    gallery: [
      'homemade meal thali',
      'indian food lunch box',
      'party food display',
      'cooking kitchen home',
    ],
    reviews: [
      { name: 'Customer', text: 'Tastes just like mom\'s cooking! Love it.', avatar: 'woman2' },
      { name: 'Customer', text: 'Fresh and delicious meals every time.', avatar: 'woman4' },
    ],
    availability: ['Daily meal subscriptions', 'Party orders', 'Custom menus'],
    communities: ['Home Chefs Network', 'Traditional Food Network'],
  },
  '7': {
    name: 'Sunita Kumar',
    businessType: 'Cake Baking',
    distance: 1.5,
    area: 'Whitefield',
    avatar: 'woman3',
    quote: "Creating sweet memories, one cake at a time",
    about: "I'm passionate about creating beautiful custom cakes for all occasions. From birthdays to weddings, each cake is made with premium ingredients and decorated with love.",
    phone: "+91 98765 43216",
    email: "sunita.kumar@example.com",
    isConnected: false,
    products: [
      { name: 'Birthday Cakes', price: '₹1,000+', image: 'birthday cake colorful' },
      { name: 'Wedding Cakes', price: '₹3,000+', image: 'wedding cake elegant' },
      { name: 'Cupcakes', price: '₹50 each', image: 'cupcakes decorated' },
    ],
    gallery: [
      'cake decoration artistic',
      'birthday cake creative',
      'cupcakes variety colorful',
      'wedding cake multi tier',
    ],
    reviews: [
      { name: 'Customer', text: 'Stunning cake designs! My daughter loved it.', avatar: 'woman1' },
      { name: 'Customer', text: 'Beautiful and tasty. Highly recommended!', avatar: 'woman1' },
    ],
    availability: ['Custom designs', 'Advance bookings', 'Festival specials'],
    communities: ['Bakers Community', 'Sweet Makers Group'],
  },
  '8': {
    name: 'Divya Iyer',
    businessType: 'Handmade Jewelry',
    distance: 4.8,
    area: 'Banashankari',
    avatar: 'woman4',
    quote: "Handcrafted jewelry that tells your unique story",
    about: "I create unique, handmade jewelry pieces using traditional techniques and modern designs. Each piece is carefully crafted to be special and one-of-a-kind.",
    phone: "+91 98765 43217",
    email: "divya.iyer@example.com",
    isConnected: false,
    products: [
      { name: 'Earrings', price: '₹300+', image: 'handmade earrings jewelry' },
      { name: 'Necklaces', price: '₹800+', image: 'handmade necklace jewelry' },
      { name: 'Bracelets', price: '₹400+', image: 'handmade bracelet jewelry' },
    ],
    gallery: [
      'jewelry display handmade',
      'earrings collection colorful',
      'necklace designs unique',
      'jewelry making process',
    ],
    reviews: [
      { name: 'Customer', text: 'Unique designs and great quality!', avatar: 'woman2' },
      { name: 'Customer', text: 'I get so many compliments on her jewelry.', avatar: 'woman3' },
    ],
    availability: ['Custom designs', 'Gift packaging', 'Bulk orders for events'],
    communities: ['Handmade Crafts Circle', 'Jewelry Makers Group'],
  },
  '15': {
    name: 'Aruna Rao',
    businessType: 'Sweet Making',
    distance: 1.2,
    area: 'Malleshwaram',
    avatar: 'woman3',
    quote: "Traditional sweets made with authentic recipes and pure ingredients",
    about: "I specialize in making traditional Indian sweets using my family's age-old recipes. From festive occasions to daily treats, every sweet is made fresh with premium ingredients and no preservatives.",
    phone: "+91 98765 43224",
    email: "aruna.rao@example.com",
    isConnected: false,
    products: [
      { name: 'Mysore Pak', price: '₹250', image: 'mysore pak sweet indian' },
      { name: 'Ladoo Varieties', price: '₹200', image: 'ladoo indian sweet' },
      { name: 'Barfi Assortment', price: '₹300', image: 'barfi indian sweet' },
    ],
    gallery: [
      'indian sweets display',
      'traditional sweets mithai',
      'festive sweets box',
      'sweet making process',
    ],
    reviews: [
      { name: 'Customer', text: 'Authentic taste! Reminds me of my grandmother\'s cooking.', avatar: 'woman1' },
      { name: 'Customer', text: 'Fresh and delicious sweets. Perfect for festivals.', avatar: 'woman2' },
    ],
    availability: ['Festival orders', 'Custom boxes', 'Bulk orders'],
    communities: ['Sweet Makers Group', 'Traditional Food Network'],
  },
  '16': {
    name: 'Kamala Srinivas',
    businessType: 'Home Tailoring',
    distance: 5.8,
    area: 'Kengeri',
    avatar: 'woman4',
    quote: "Every garment crafted with precision and care",
    about: "I offer professional tailoring services from home with over 12 years of experience. Specializing in custom stitching, alterations, and traditional wear, I ensure every piece fits perfectly.",
    phone: "+91 98765 43225",
    email: "kamala.srinivas@example.com",
    isConnected: false,
    products: [
      { name: 'Saree Blouses', price: '₹450+', image: 'saree blouse design' },
      { name: 'Salwar Kameez', price: '₹800+', image: 'salwar kameez tailoring' },
      { name: 'Alterations', price: '₹250+', image: 'clothing alterations' },
    ],
    gallery: [
      'tailoring stitching work',
      'blouse designs collection',
      'traditional wear stitching',
      'sewing machine fabric',
    ],
    reviews: [
      { name: 'Customer', text: 'Excellent stitching quality! Very professional.', avatar: 'woman2' },
      { name: 'Customer', text: 'Perfect fit every time. Highly recommended.', avatar: 'woman3' },
    ],
    availability: ['Custom stitching', 'Quick alterations', 'Bridal work'],
    communities: ['Tailoring & Fashion Group', 'Traditional Wear Network'],
  },
  '17': {
    name: 'Usha Reddy',
    businessType: 'Saree Draping',
    distance: 7.2,
    area: 'Electronic City',
    avatar: 'woman1',
    quote: "Transforming sarees into stunning styles for every occasion",
    about: "I specialize in professional saree draping services for weddings, parties, and special events. From traditional to contemporary styles, I create beautiful drapes that complement your look perfectly.",
    phone: "+91 98765 43226",
    email: "usha.reddy@example.com",
    isConnected: false,
    products: [
      { name: 'Bridal Draping', price: '₹2,000+', image: 'bridal saree draping' },
      { name: 'Party Style', price: '₹800', image: 'saree draping styles' },
      { name: 'Traditional Drape', price: '₹500', image: 'traditional saree draping' },
    ],
    gallery: [
      'saree draping elegant',
      'bridal saree style',
      'saree pleating professional',
      'saree styling beautiful',
    ],
    reviews: [
      { name: 'Customer', text: 'She made my bridal look absolutely stunning!', avatar: 'woman4' },
      { name: 'Customer', text: 'Professional and creative draping styles.', avatar: 'woman1' },
    ],
    availability: ['Bridal bookings', 'Home service', 'Event styling'],
    communities: ['Beauty Services Group', 'Bridal Services Network'],
  },
  '18': {
    name: 'Sowmya Hegde',
    businessType: 'Crochet Items',
    distance: 2.4,
    area: 'Sadashivanagar',
    avatar: 'woman2',
    quote: "Handcrafted crochet pieces that add warmth to your home",
    about: "I create beautiful handmade crochet items including home décor, baby clothes, and accessories. Each piece is crafted with care using high-quality yarn and attention to detail.",
    phone: "+91 98765 43227",
    email: "sowmya.hegde@example.com",
    isConnected: false,
    products: [
      { name: 'Baby Clothes', price: '₹400+', image: 'crochet baby clothes' },
      { name: 'Home Décor', price: '₹600+', image: 'crochet home decor' },
      { name: 'Accessories', price: '₹250+', image: 'crochet accessories' },
    ],
    gallery: [
      'crochet work colorful',
      'handmade crochet items',
      'crochet baby items',
      'crochet patterns creative',
    ],
    reviews: [
      { name: 'Customer', text: 'Beautiful crochet work! My baby looks adorable.', avatar: 'woman3' },
      { name: 'Customer', text: 'Lovely designs and soft yarn. Very happy!', avatar: 'woman4' },
    ],
    availability: ['Custom orders', 'Gift items', 'Seasonal collections'],
    communities: ['Handmade Crafts Circle', 'Crochet Makers Group'],
  },
  '19': {
    name: 'Padma Krishnan',
    businessType: 'Authentic Cuisine',
    distance: 6.5,
    area: 'Marathahalli',
    avatar: 'woman3',
    quote: "Bringing authentic regional flavors to your table",
    about: "I specialize in authentic South Indian and regional cuisine, offering tiffin services and catering for small events. Every dish is prepared fresh using traditional methods and authentic spices.",
    phone: "+91 98765 43228",
    email: "padma.krishnan@example.com",
    isConnected: false,
    products: [
      { name: 'Daily Tiffin', price: '₹130/day', image: 'south indian tiffin' },
      { name: 'Party Meals', price: '₹500+', image: 'south indian feast' },
      { name: 'Special Dishes', price: '₹250+', image: 'authentic indian cuisine' },
    ],
    gallery: [
      'south indian food thali',
      'traditional cuisine authentic',
      'tiffin meal box',
      'homemade indian food',
    ],
    reviews: [
      { name: 'Customer', text: 'Authentic taste! Just like home-cooked meals.', avatar: 'woman1' },
      { name: 'Customer', text: 'Consistent quality and great flavors.', avatar: 'woman2' },
    ],
    availability: ['Daily tiffin service', 'Party orders', 'Custom menus'],
    communities: ['Home Chefs Network', 'Regional Cuisine Group'],
  },
  '20': {
    name: 'Vasantha Kumari',
    businessType: 'Mango Pickle',
    distance: 8.1,
    area: 'Hebbal',
    avatar: 'woman4',
    quote: "Traditional mango pickles with authentic flavors and no preservatives",
    about: "I make authentic mango pickles using traditional family recipes passed down through generations. All pickles are made with fresh ingredients, authentic spices, and absolutely no preservatives or artificial flavors.",
    phone: "+91 98765 43229",
    email: "vasantha.kumari@example.com",
    isConnected: false,
    products: [
      { name: 'Avakaya Pickle', price: '₹220', image: 'avakaya mango pickle' },
      { name: 'Sweet Mango', price: '₹200', image: 'sweet mango pickle' },
      { name: 'Lime Pickle', price: '₹180', image: 'lime pickle indian' },
    ],
    gallery: [
      'mango pickle jars',
      'traditional pickle making',
      'pickle varieties display',
      'homemade pickles authentic',
    ],
    reviews: [
      { name: 'Customer', text: 'Best mango pickle I\'ve ever tasted! Authentic flavor.', avatar: 'woman2' },
      { name: 'Customer', text: 'Reminds me of my grandmother\'s pickles.', avatar: 'woman3' },
    ],
    availability: ['Seasonal batches', 'Custom spice levels', 'Bulk orders'],
    communities: ['Pickle & Snacks Makers', 'Traditional Food Network'],
  },
  '21': {
    name: 'Savita Joshi',
    businessType: 'Blouse Stitching',
    distance: 3.9,
    area: 'RR Nagar',
    avatar: 'woman1',
    quote: "Creating beautiful blouses that complement every saree",
    about: "I specialize in custom blouse stitching with over 10 years of experience. From traditional to contemporary designs, I create blouses that fit perfectly and enhance your saree's beauty.",
    phone: "+91 98765 43230",
    email: "savita.joshi@example.com",
    isConnected: false,
    products: [
      { name: 'Designer Blouses', price: '₹600+', image: 'designer blouse stitching' },
      { name: 'Traditional Blouses', price: '₹450', image: 'traditional blouse design' },
      { name: 'Readymade Blouses', price: '₹500+', image: 'readymade blouse collection' },
    ],
    gallery: [
      'blouse designs variety',
      'embroidered blouse work',
      'designer blouse collection',
      'blouse stitching process',
    ],
    reviews: [
      { name: 'Customer', text: 'Perfect fitting and beautiful designs!', avatar: 'woman4' },
      { name: 'Customer', text: 'She understands exactly what I want. Excellent work.', avatar: 'woman3' },
    ],
    availability: ['Custom designs', 'Quick stitching', 'Bridal blouses'],
    communities: ['Tailoring & Fashion Group', 'Blouse Designers Network'],
  },
  '22': {
    name: 'Mala Deshmukh',
    businessType: 'Herbal Beauty',
    distance: 9.2,
    area: 'Yelahanka',
    avatar: 'woman2',
    quote: "Natural beauty solutions with the power of herbs",
    about: "I create handmade herbal beauty products using natural ingredients and traditional recipes. From face packs to hair oils, all products are chemical-free and made fresh to order.",
    phone: "+91 98765 43231",
    email: "mala.deshmukh@example.com",
    isConnected: false,
    products: [
      { name: 'Herbal Face Packs', price: '₹250', image: 'herbal face pack natural' },
      { name: 'Hair Oils', price: '₹300', image: 'herbal hair oil ayurvedic' },
      { name: 'Body Scrubs', price: '₹280', image: 'herbal body scrub natural' },
    ],
    gallery: [
      'herbal beauty products',
      'natural skincare handmade',
      'ayurvedic beauty items',
      'herbal ingredients display',
    ],
    reviews: [
      { name: 'Customer', text: 'All natural and so effective! My skin loves it.', avatar: 'woman1' },
      { name: 'Customer', text: 'Chemical-free products that actually work.', avatar: 'woman4' },
    ],
    availability: ['Fresh batches', 'Custom blends', 'Gift packaging'],
    communities: ['Beauty Services Group', 'Natural Products Network'],
  },
  '23': {
    name: 'Renuka Patel',
    businessType: 'Cupcake Specialist',
    distance: 1.8,
    area: 'Frazer Town',
    avatar: 'woman3',
    quote: "Delicious cupcakes with creative flavors and beautiful designs",
    about: "I specialize in custom cupcakes for all occasions. From classic flavors to unique creations, each cupcake is baked fresh and decorated to perfection with attention to detail.",
    phone: "+91 98765 43232",
    email: "renuka.patel@example.com",
    isConnected: false,
    products: [
      { name: 'Classic Cupcakes', price: '₹60 each', image: 'cupcakes classic vanilla' },
      { name: 'Designer Cupcakes', price: '₹100 each', image: 'designer cupcakes decorated' },
      { name: 'Cupcake Boxes', price: '₹500+', image: 'cupcake gift box' },
    ],
    gallery: [
      'cupcakes colorful decorated',
      'designer cupcakes creative',
      'cupcake decorating art',
      'cupcake varieties display',
    ],
    reviews: [
      { name: 'Customer', text: 'Beautiful designs and delicious taste!', avatar: 'woman2' },
      { name: 'Customer', text: 'Best cupcakes in town. Kids loved them!', avatar: 'woman1' },
    ],
    availability: ['Custom orders', 'Party boxes', 'Same-day delivery'],
    communities: ['Bakers Community', 'Dessert Makers Group'],
  },
  '24': {
    name: 'Bharati Nair',
    businessType: 'Kondattam Snacks',
    distance: 5.3,
    area: 'JP Nagar',
    avatar: 'woman4',
    quote: "Traditional Kerala snacks made with authentic recipes",
    about: "I make authentic Kerala-style snacks and savories perfect for tea time and special occasions. All products are made fresh using traditional methods and quality ingredients.",
    phone: "+91 98765 43233",
    email: "bharati.nair@example.com",
    isConnected: false,
    products: [
      { name: 'Banana Chips', price: '₹150', image: 'kerala banana chips' },
      { name: 'Mixture', price: '₹180', image: 'kerala mixture snack' },
      { name: 'Achappam', price: '₹200', image: 'achappam kerala snack' },
    ],
    gallery: [
      'kerala snacks variety',
      'traditional snacks homemade',
      'banana chips fresh',
      'snack packaging display',
    ],
    reviews: [
      { name: 'Customer', text: 'Authentic Kerala taste! So crispy and fresh.', avatar: 'woman3' },
      { name: 'Customer', text: 'My family loves these snacks. Best quality.', avatar: 'woman2' },
    ],
    availability: ['Festival orders', 'Bulk quantities', 'Gift packs'],
    communities: ['Pickle & Snacks Makers', 'Regional Food Network'],
  },
  '25': {
    name: 'Shobha Murthy',
    businessType: 'Handwoven Bags',
    distance: 7.8,
    area: 'Sarjapur',
    avatar: 'woman1',
    quote: "Eco-friendly handwoven bags that blend style with sustainability",
    about: "I create beautiful handwoven bags using natural fibers and sustainable materials. Each bag is unique, combining traditional weaving techniques with contemporary designs perfect for daily use or gifting.",
    phone: "+91 98765 43234",
    email: "shobha.murthy@example.com",
    isConnected: false,
    products: [
      { name: 'Shopping Bags', price: '₹400+', image: 'handwoven shopping bags' },
      { name: 'Handbags', price: '₹800+', image: 'handwoven handbag natural' },
      { name: 'Gift Baskets', price: '₹600+', image: 'handwoven gift basket' },
    ],
    gallery: [
      'handwoven bags collection',
      'eco friendly bags natural',
      'woven handbags colorful',
      'basket weaving process',
    ],
    reviews: [
      { name: 'Customer', text: 'Beautiful and eco-friendly! Perfect for daily use.', avatar: 'woman2' },
      { name: 'Customer', text: 'Sturdy and stylish bags. Great craftsmanship.', avatar: 'woman4' },
    ],
    availability: ['Custom sizes', 'Bulk orders', 'Corporate gifting'],
    communities: ['Handmade Crafts Circle', 'Eco-Friendly Products Network'],
  },
};

export function UserProfileScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const profile = userProfiles[id || '1'] || userProfiles['1'];
  const [isConnected, setIsConnected] = useState(profile.isConnected);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <div className="min-h-screen bg-white pb-20 max-w-[390px] mx-auto">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-10 max-w-[390px] mx-auto">
        <div className="px-6 pt-12 pb-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative mt-20 bg-gradient-to-b from-[#E8F0EC] to-white pt-12 pb-8 px-6">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full bg-white shadow-md p-2">
            <Avatar variant={profile.avatar} className="w-full h-full" />
          </div>
        </div>

        {/* Quote Bubble */}
        <div className="relative bg-white rounded-2xl p-4 shadow-sm max-w-[280px] mx-auto">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
          <p className="text-[14px] text-[#1A1A1A] text-center italic leading-relaxed">
            "{profile.quote}"
          </p>
        </div>
      </div>

      {/* Identity Section */}
      <div className="px-6 mb-6 text-center">
        <h1 className="mb-1">{profile.name}</h1>
        <p className="text-[#666666] text-[15px] mb-2">{profile.businessType}</p>
        <div className="flex items-center justify-center gap-2 text-[13px] text-[#999999]">
          <MapPin className="w-4 h-4" />
          <span>{profile.distance} km away · {profile.area}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 mb-8">
        {!isConnected ? (
          <>
            <div className="flex gap-3 mb-3">
              <button
                onClick={handleConnect}
                className="flex-1 bg-[#5A8B6F] text-white py-3 rounded-xl font-medium text-[15px] hover:bg-[#4A7360] transition-colors shadow-sm"
              >
                Connect
              </button>
              <button
                onClick={() => navigate(`/chat/${id}`)}
                className="flex-1 bg-[#E8F0EC] text-[#5A8B6F] py-3 rounded-xl font-medium text-[15px] hover:bg-[#E8F0EC] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Message
              </button>
            </div>
            <p className="text-center text-[13px] text-[#999999]">
              Connect to view contact details
            </p>
          </>
        ) : (
          <>
            <div className="flex gap-3 mb-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-[#5A8B6F] text-white py-3 rounded-xl font-medium text-[15px] hover:bg-[#4A7360] transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </button>
              <button
                onClick={() => navigate(`/chat/${id}`)}
                className="flex-1 bg-[#E8F0EC] text-[#5A8B6F] py-3 rounded-xl font-medium text-[15px] hover:bg-[#E8F0EC] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Message
              </button>
            </div>

            {/* Contact Info */}
            <div className="bg-[#F5F5F5] rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-3 text-[14px]">
                <Phone className="w-5 h-5 text-[#5A8B6F]" />
                <span className="text-[#1A1A1A]">{profile.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-[14px]">
                <Mail className="w-5 h-5 text-[#5A8B6F]" />
                <span className="text-[#1A1A1A]">{profile.email}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* About Section */}
      <div className="px-6 mb-8">
        <h2 className="font-semibold text-[#1A1A1A] mb-3">About</h2>
        <p className="text-[#666666] text-[15px] leading-relaxed">
          {profile.about}
        </p>
      </div>

      {/* Products Section */}
      <div className="mb-8">
        <h2 className="font-semibold text-[#1A1A1A] mb-3 px-6">Products</h2>
        <div className="flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {profile.products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[140px] bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E0E0E0]"
            >
              <div className="aspect-square bg-[#E8F0EC] overflow-hidden">
                <ImageWithFallback
                  src={`https://source.unsplash.com/400x400/?${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-[13px] font-medium text-[#1A1A1A] mb-1">{product.name}</p>
                {product.price && (
                  <p className="text-[12px] text-[#5A8B6F] font-semibold">{product.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Gallery */}
      <div className="px-6 mb-8">
        <h2 className="font-semibold text-[#1A1A1A] mb-3">Gallery</h2>
        <div className="grid grid-cols-2 gap-3">
          {profile.gallery.map((item, index) => (
            <div
              key={index}
              className="aspect-square bg-[#E8F0EC] rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src={`https://source.unsplash.com/600x600/?${item}`}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-6 mb-8">
        <h2 className="font-semibold text-[#1A1A1A] mb-3">Reviews</h2>
        <div className="space-y-3">
          {profile.reviews.map((review, index) => (
            <div key={index} className="bg-[#F5F5F5] rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10">
                  <Avatar variant={review.avatar} className="w-full h-full" />
                </div>
                <p className="font-medium text-[#1A1A1A] text-[14px]">{review.name}</p>
              </div>
              <p className="text-[#666666] text-[14px] leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Availability Section */}
      <div className="px-6 mb-8">
        <h2 className="font-semibold text-[#1A1A1A] mb-3">Availability</h2>
        <div className="flex flex-wrap gap-2">
          {profile.availability.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#E8F0EC] text-[#5A8B6F] rounded-full text-[13px] font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Communities Section */}
      <div className="px-6 mb-8">
        <h2 className="font-semibold text-[#1A1A1A] mb-3">Communities</h2>
        <div className="space-y-2">
          {profile.communities.map((community, index) => (
            <div
              key={index}
              className="bg-white border border-[#E0E0E0] rounded-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#5A8B6F] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <span className="text-[#1A1A1A] text-[14px] font-medium">{community}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}