import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import products from '../data/products';
import { addToCart } from '../redux/slices/cartSlice';
import './Product.scss';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Produit introuvable</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <span className="price">{product.price.toFixed(2)} €</span>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default Product;
