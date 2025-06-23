import './Footer.scss';

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} CarbonShop - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
