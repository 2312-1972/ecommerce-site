import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="card-footer">
        <span className="price">{product.price.toFixed(2)} €</span>
        <Link to={`/product/${product.id}`} className="buy-btn">Voir</Link>
      </div>
    </div>
  );
};

export default ProductCard;
