import './Link.scss';

const SocialLink = () => {
  return (
    <div>
      <div className='container'>
      <i className='fa-brands fa github' id='github'></i>
      <i className='fa-brands fa x-twitter' id='x-twitter'></i>
      <i className='fa-brands fa instagram' id='instagram'></i>
      {/* <i className='fa-brands fa tiktok' id='tiktok'></i>
      <i className='fa-brands fa contact' id='contact'></i> */}
      </div>
      <p>&copy; {new Date().getFullYear()} CarbonShop - Tous droits réservés</p>
 </div>
  );
};

export default SocialLink;