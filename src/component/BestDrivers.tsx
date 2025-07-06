import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import '../styles/BestDrivers.css';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Golf Cart Bag',
    price: '$20.70',
    image: '/assets/images/shop-1.png',
  },
  {
    id: 2,
    name: 'Men’s Running Shoe',
    price: '$19.20',
    image: '/assets/images/shop-2.png',
  },
  {
    id: 3,
    name: 'Fusion Golf Glove',
    price: '$30.00',
    image: '/assets/images/shop-3.png',
  },
  {
    id: 4,
    name: 'Drive Golf Balls (White)',
    price: '$21.00',
    image: '/assets/images/shop-4.png',
  },
];

const BestDrivers: React.FC = () => {
  return (
    <section className="golf-store">
      <p className="golf-store-subtitle">• BEST DRIVERS •</p>
      <h2 className="golf-store-title">
        COMPLETE GOLF STORE WITH ALL THE<br /> GEAR YOU REQUIRE
      </h2>
      <div className="golf-store-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-card-image">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>

            {/* Hover actions */}
            <div className="hover-actions">
                <button className="visitBtn">
                    <span>
                        Add to Cart
                    </span>
                </button>
              <div className="icon-group">
                <FavoriteBorderIcon className="hover-icon" />
                <CachedOutlinedIcon className="hover-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestDrivers;
