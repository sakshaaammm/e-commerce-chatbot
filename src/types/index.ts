export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
}

export interface ChatMessage {
  id: string;
  content: string | Product[];
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface User {
  id: string;
  username: string;
  isAuthenticated: boolean;
}