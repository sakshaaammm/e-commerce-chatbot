import React from 'react';
import { ChatMessage as ChatMessageType } from '../types';
import { MessageCircle, Bot } from 'lucide-react';
import { ProductList } from './ProductList';

interface Props {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<Props> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex gap-3 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-pink-100' : 'bg-gray-100'
      }`}>
        {isBot ? <Bot size={20} className="text-pink-600" /> : <MessageCircle size={20} className="text-gray-500" />}
      </div>
      <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
        isBot ? 'bg-pink-50 border border-pink-100' : 'bg-gray-100'
      }`}>
        {Array.isArray(message.content) ? (
          <ProductList products={message.content} />
        ) : (
          <p className="text-sm text-gray-800 whitespace-pre-line">{message.content}</p>
        )}
        <span className="text-xs text-pink-400 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};