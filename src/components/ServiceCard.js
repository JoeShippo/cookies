import React from 'react';

const ServiceCard = ({ heading, description, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    {/* <img src={image} alt={heading} className="w-full h-48 object-cover" /> */}
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{heading}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default ServiceCard;