import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    /**
     * Ajoute un article au panier.
     * Si un article identique (même ID et même couleur) existe déjà, sa quantité est incrémentée.
     * Sinon, un nouvel article est ajouté avec un identifiant unique `cartItemId`.
     */
    addToCart: (state, action) => {
      const newItem = action.payload;
      const variantName = newItem.selectedVariant ? newItem.selectedVariant.name : null;
      
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && (item.selectedVariant ? item.selectedVariant.name : null) === variantName
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        // Crée un ID unique pour le panier (ex: '1-Blanc' ou '2-null')
        const cartItemId = `${newItem.id}-${variantName}`;
        state.items.push({ 
          ...newItem, 
          cartItemId: cartItemId 
        });
      }
    },

    /**
     * Supprime un article du panier en utilisant son `cartItemId`.
     */
    removeFromCart: (state, action) => {
      const cartItemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.cartItemId !== cartItemIdToRemove);
    },

    /**
     * Incrémente la quantité d'un article en utilisant son `cartItemId`.
     */
    incrementQuantity: (state, action) => {
      const cartItemIdToIncrement = action.payload;
      const item = state.items.find(item => item.cartItemId === cartItemIdToIncrement);
      if (item) {
        item.quantity++;
      }
    },

    /**
     * Décrémente la quantité d'un article (jusqu'à un minimum de 1).
     */
    decrementQuantity: (state, action) => {
      const cartItemIdToDecrement = action.payload;
      const item = state.items.find(item => item.cartItemId === cartItemIdToDecrement);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    /**
     * Vide complètement le panier.
     */
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { 
  addToCart, 
  removeFromCart, 
  clearCart, 
  incrementQuantity, 
  decrementQuantity 
} = cartSlice.actions;

export default cartSlice.reducer;