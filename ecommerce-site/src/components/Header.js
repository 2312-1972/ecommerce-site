import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">CarbonShop</div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/shop">Boutique</Link></li>
          <li><Link to="/cart">Panier</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
