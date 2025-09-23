import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { getShareUrls } from '../utils/getShareUrls';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showShare, setShowShare] = useState(false);

  // --- 1. GESTION DE LA COULEUR SÉLECTIONNÉE ---
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    // Définit la première couleur comme sélection par défaut
    if (product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);
  // ---------------------------------------------

  const handleAddToCart = () => {
    const imageToSend = selectedVariant ? selectedVariant.image : product.image;
    
    dispatch(addToCart({
      ...product,
      quantity: 1,
      image: imageToSend,
      selectedVariant: selectedVariant
    }));

    const variantName = selectedVariant ? `(${selectedVariant.name})` : '';
    toast.success(`${product.name} ${variantName} ajouté au panier !`);
  };

  const urls = getShareUrls(product);

  // --- 2. LOGIQUE POUR CHOISIR LE MÉDIA À AFFICHER (IMAGE OU VIDÉO) ---
  const displayMediaUrl = selectedVariant ? selectedVariant.image : product.image;
  const isVideo = displayMediaUrl && displayMediaUrl.endsWith('.mp4');
  // --------------------------------------------------------------------

  return (
    <div className="product-card">
      {/* --- 3. AFFICHAGE CONDITIONNEL DU MÉDIA --- */}
      {isVideo ? (
        <video 
          src={displayMediaUrl} 
          width="100%" 
          loop 
          muted 
          autoPlay 
          playsInline
          className="product-media"
        >
          Votre navigateur ne supporte pas la vidéo.
        </video>
      ) : (
        <img src={displayMediaUrl} alt={`${product.name} - ${selectedVariant?.name || ''}`} className="product-media" />
      )}
      {/* ------------------------------------------- */}

      <h3>{product.name}</h3>

      {/* --- 4. AFFICHAGE DES PASTILLES DE COULEUR --- */}
      {product.variants && product.variants.length > 0 && (
        <div className="color-swatches">
          {product.variants.map((variant) => (
            <button
              key={variant.name}
              className={`swatch ${selectedVariant?.name === variant.name ? 'selected' : ''}`}
              style={{ backgroundColor: variant.colorCode }}
              onClick={() => setSelectedVariant(variant)}
              aria-label={`Choisir la couleur ${variant.name}`}
            />
          ))}
        </div>
      )}
      {/* -------------------------------------------- */}

      <p>{product.description}</p>

      <div className="card-footer">
        <span className="price">{product.price.toFixed(2)} €</span>
        <Link to={`/product/${product.id}`} className="buy-btn">Voir</Link>
        <button onClick={handleAddToCart} className="add-to-cart-btn" disabled={product.variants && !selectedVariant}>
          Ajouter
        </button>
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