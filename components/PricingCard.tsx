import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  period?: string;
}

const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, isFeatured = false, period }) => {
  const cardClasses = `relative p-8 rounded-lg shadow-lg flex flex-col transition-all duration-300 ${
    isFeatured 
      ? 'bg-purple-900/30 border-2 border-brand-purple transform scale-105 shadow-glow-purple' 
      : 'bg-dark-card border border-gray-700 hover:border-brand-purple hover:shadow-glow-purple/50'
  }`;

  const buttonClasses = `w-full mt-auto font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 ${
    isFeatured 
      ? 'bg-gradient-to-r from-brand-purple to-brand-pink text-white shadow-lg shadow-purple-500/50' 
      : 'bg-gray-700 text-white hover:bg-brand-purple'
  }`;
  
  return (
    <div className={cardClasses}>
      {isFeatured && plan === "Whale Shark Card" && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-center mb-2">{plan}</h3>
      <div className="text-center text-gray-400 mb-6">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        {period && <span className="text-lg">{period}</span>}
      </div>
      <ul className="space-y-4 mb-8 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={buttonClasses}>
        Buy Now
      </a>
    </div>
  );
};

export default PricingCard;