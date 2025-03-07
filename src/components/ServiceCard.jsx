import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="p-6 text-center">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-zephyr-ashbrown mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;