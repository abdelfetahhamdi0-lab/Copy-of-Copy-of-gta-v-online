import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-dark-card p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-brand-cyan hover:shadow-glow-cyan">
      <div className="text-brand-cyan mb-4 inline-block">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;