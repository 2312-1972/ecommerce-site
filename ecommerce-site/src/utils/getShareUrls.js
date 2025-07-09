// src/utils/getShareUrls.js
export const getShareUrls = (product) => {
  const url = encodeURIComponent(window.location.origin + '/product/' + product.id);
  const text = encodeURIComponent(`Découvrez ${product.name} sur CarbonShop !`);

  return {
    mail: `mailto:?subject=${text}&body=${url}`,
    whatsapp: `https://wa.me/?text=${text}%20${url}`,
    x: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    instagram: `https://www.instagram.com/?url=${url}`, // indirect
    tiktok: `https://www.tiktok.com/share?url=${url}`
  };
};
