import { useState, useMemo } from 'react'; // 1. On importe les outils de React
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shop.scss';

const Shop = () => {
  // 2. On ajoute les états pour la recherche et la catégorie
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Cryptos', 'High-Tech', 'Tips'];

  // 3. On ajoute la logique pour filtrer les produits
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedCategory === 'Tous') return true;
        return product.category === selectedCategory;
      })
      .filter((product) => {
        const term = searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term)
        );
      });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="shop-page">
      <h1>Boutique</h1>

      {/* 4. On ajoute les éléments de l'interface pour les filtres */}
      <div className="filters-container">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="category-menu">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 5. On CONSERVE votre "product-grid" et on l'utilise avec les produits filtrés */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-products-message">
            Aucun produit ne correspond à votre recherche.
          </p>
        )}
      </div>
    </div>
  );
};

export default Shop;