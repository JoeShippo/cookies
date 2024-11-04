import React from 'react';

const TestimonialCard = ({ profileImage, name, text, bgColor, textColor, }) => (
  <div className={`flex items-center p-4 rounded-lg shadow-md ${bgColor} text-white`}>
    <img src={profileImage} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-white" />
    <div>
      <p className={`font-semibold ${textColor}`}>{name}</p>
      <p className={`text-sm ${textColor}`}>{text}</p>
    </div>
  </div>
);

export default TestimonialCard;