import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.name} ajouté au panier !`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="card-footer">
        <span className="price">{product.price.toFixed(2)} €</span>
        <Link to={`/product/${product.id}`} className="buy-btn">Voir</Link>
        <button onClick={handleAddToCart} className="add-btn">Ajouter</button>
      </div>
    </div>
  );
};

export default ProductCard;
