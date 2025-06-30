import products from '../data/products'; 
import ProductCard from '../components/ProductCard';
import './Shop.scss';

const Shop = () => {
  return (
    <div className="shop-page">
      <h1>Boutique</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
