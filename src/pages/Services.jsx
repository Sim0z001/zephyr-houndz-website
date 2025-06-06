import React from 'react';

const Services = () => {
  return (
    <div className="bg-page-background">
      <div className="container mx-auto px-4 pb-16">
        <h1 className="text-5xl font-bold text-center text-zephyr-ashbrown mb-4">
          Our Services & Pricing
        </h1>
        
        <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto">
          At Zephyr Houndz, we offer specialized grooming packages tailored to your pet's specific needs. 
          All services include gentle handling and personalized attention in our home-based salon.
        </p>
        
        {/* Price List Section */}
        <div className="max-w-4xl mx-auto mb-8">
          {/* First Price List Image */}
          <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
            <img 
              src="/images/services/price-list-1.webp" 
              alt="Zephyr Houndz Full Groom and Tidy Groom Price List" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          
          {/* Second Price List Image */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <img 
              src="/images/services/price-list-2.webp" 
              alt="Zephyr Houndz Bath Services and Add-on Price List" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          
          <p className="text-center mt-6 text-zephyr-ashbrown font-medium italic">
            Coat condition and pricing will be double checked upon arrival
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;