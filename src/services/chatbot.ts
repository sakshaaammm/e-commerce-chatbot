import { Product } from '../types';
import { products } from '../data/products';
import { getProductsByCategory, getPriceRange, getProductsByPriceRange } from './productService';
import { formatPrice, formatProductList } from '../utils/formatters';

class ChatbotService {
  private searchProducts(query: string): Product[] {
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
    );
  }

  private formatCategoryResponse(category: string): string {
    const categoryProducts = getProductsByCategory(category);
    const priceRange = getPriceRange(category);
    
    if (categoryProducts.length === 0) {
      return `I couldn't find any products in the ${category} category.`;
    }

    const response = [
      `Here are the ${category} products we have:`,
      '',
      formatProductList(categoryProducts),
      '',
      `Price range: ${formatPrice(priceRange.min)} - ${formatPrice(priceRange.max)}`
    ];

    return response.join('\n');
  }

  processMessage(message: string): string | Product[] {
    const lowercaseMessage = message.toLowerCase();
    
    // Handle greetings
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
      return 'Hello! I can help you find products. Try asking about Electronics, Clothing, or Opticals!';
    }

    // Handle category-specific queries
    const categories = ['electronics', 'clothing', 'opticals'];
    for (const category of categories) {
      if (lowercaseMessage.includes(category)) {
        const products = getProductsByCategory(category);
        return products;
      }
    }

    // Handle price range queries
    if (lowercaseMessage.includes('price range')) {
      for (const category of categories) {
        if (lowercaseMessage.includes(category)) {
          const { min, max } = getPriceRange(category);
          return `The price range for ${category} is ${formatPrice(min)} to ${formatPrice(max)}`;
        }
      }
    }

    // Handle general search
    if (lowercaseMessage.includes('search') || lowercaseMessage.includes('find')) {
      const searchResults = this.searchProducts(message);
      if (searchResults.length > 0) {
        return searchResults;
      }
      return 'I couldn\'t find any products matching your search. Could you try different keywords?';
    }

    return 'I can help you find products by category (Electronics, Clothing, Opticals) or price range. What would you like to know?';
  }
}

export const chatbotService = new ChatbotService();