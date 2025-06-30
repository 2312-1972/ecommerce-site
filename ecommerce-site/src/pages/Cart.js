import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, incrementQuantity,
  decrementQuantity } from '../redux/slices/cartSlice';
import './Cart.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Mon panier</h1>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="details">
                  <h3>{item.name}</h3>
                  <p>Prix unitaire : {item.price.toFixed(2)} €</p>
                  <p>Quantité : {item.quantity}</p>
                  <p>Total : {(item.price * item.quantity).toFixed(2)} €</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Supprimer
                  </button>
                  <div className="quantity-controls">
  <button onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
  <span>{item.quantity}</span>
  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
</div>

                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h2>Total général : {totalPrice.toFixed(2)} €</h2>
            <button onClick={() => dispatch(clearCart())}>Vider le panier</button>
          </div>
          
        </>
        
      )}
    </div>
  );
};

export default Cart;
