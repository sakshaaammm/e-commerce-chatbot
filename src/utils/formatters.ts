export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const formatProductList = (products: any[]): string => {
  return products.map(p => `${p.name} - ${formatPrice(p.price)}`).join('\n');
};