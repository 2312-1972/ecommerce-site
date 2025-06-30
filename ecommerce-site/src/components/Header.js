import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { clearUser } from '../redux/slices/userSlice';
import './Header.scss';

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => dispatch(clearUser()))
      .catch((error) => console.error('Erreur logout', error));
  };

  return (
    <header className="main-header">
      <div className="logo">CarbonShop</div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/shop">Boutique</Link></li>
          <li><Link to="/cart">Panier</Link></li>
          {!user ? (
            <>
              <li><Link to="/login">Connexion</Link></li>
              <li><Link to="/register">S'inscrire</Link></li>
            </>
          ) : (
            <>
              <li className="user-email">{user.email}</li>
              <li><button onClick={handleLogout}>Déconnexion</button></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
