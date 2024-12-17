import React, { useState, useEffect } from 'react';
import { ChatMessage as ChatMessageType } from './types';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { chatbotService } from './services/chatbot';
import { Bot } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    // Add welcome message
    const welcomeMessage: ChatMessageType = {
      id: '0',
      content: 'Hello! I\'m your shopping assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Process message and get bot response
    setTimeout(() => {
      const botResponse: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        content: chatbotService.processMessage(content),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl">
          {/* Header */}
          <div className="flex items-center gap-4 border-b border-pink-100 px-6 py-4">
            <div className="rounded-full bg-pink-100 p-2">
              <Bot size={24} className="text-pink-600" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-semibold text-gray-800">Shopping Assistant</h1>
              <p className="text-sm text-pink-600">Always here to help</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-transparent">
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-pink-100 p-4">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;