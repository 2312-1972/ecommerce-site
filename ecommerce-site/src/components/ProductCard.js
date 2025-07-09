import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { getShareUrls } from '../utils/getShareUrls';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showShare, setShowShare] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.name} ajouté au panier !`);
  };

  const urls = getShareUrls(product);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <div className="card-footer">
        <span className="price">{product.price.toFixed(2)} €</span>
        <Link to={`/product/${product.id}`} className="buy-btn">Voir</Link>
        <button onClick={handleAddToCart} className="add-to-cart-btn">Ajouter</button>
        <button className="share-btn" onClick={() => setShowShare(!showShare)}>
          <i className="fas fa-share-alt"></i>
        </button>
      </div>

      {showShare && (
        <div className="share-menu">
          <a href={urls.mail} target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
          <a href={urls.whatsapp} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href={urls.x} target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
          <a href={urls.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href={urls.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href={urls.tiktok} target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
