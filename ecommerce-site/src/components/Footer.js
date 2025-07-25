import './Footer.scss';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className='container'>
      <i className='fa-brands fa github' id='Github'></i>
      <i className='fa-brands fa x-twitter' id='x-twitter'></i>
      <i className='fa-brands fa instagram' id='instagram'></i>
      {/* <i className='fa-brands fa tiktok' id='tiktok'></i>
      <i className='fa-brands fa contact' id='contact'></i> */}
      </div>
      <p>&copy; {new Date().getFullYear()} CarbonShop - Tous droits réservés</p>
      
    </footer>
  );
};

export default Footer;
