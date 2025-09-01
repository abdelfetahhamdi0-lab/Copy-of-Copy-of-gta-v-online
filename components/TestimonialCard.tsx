import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatarUrl }) => {
  return (
    <div className="bg-dark-card p-8 rounded-lg shadow-lg border border-gray-700 hover:border-brand-pink hover:shadow-glow-pink transition-all duration-300">
      <p className="text-gray-300 italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-pink" />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;