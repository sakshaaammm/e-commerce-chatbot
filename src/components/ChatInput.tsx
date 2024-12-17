import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Props {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<Props> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 rounded-lg border border-pink-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/50 placeholder-pink-300"
      />
      <button
        type="submit"
        className="rounded-lg bg-pink-500 px-4 py-2 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-colors duration-200"
      >
        <Send size={20} />
      </button>
    </form>
  );
};