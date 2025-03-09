import React from 'react';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <>
      {/* Add Helmet for SEO */}
      <Helmet>
        <title>Services & Pricing | Zephyr Houndz Dog Grooming</title>
        <meta name="description" content="Comprehensive dog grooming services from basic baths to full grooms, breed-specific styling, and specialized treatments. Quality care for dogs of all sizes and breeds." />
        <meta name="keywords" content="dog grooming services, pet grooming prices, Mountain Creek dog groomer, dog bath, full groom service" />
        <meta property="og:title" content="Services & Pricing | Zephyr Houndz Dog Grooming" />
        <meta property="og:description" content="View our comprehensive dog grooming services and pricing. Professional grooming services for all breeds in Mountain Creek." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zephyrhoundz.com.au/services" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Dog Grooming Services & Prices | Zephyr Houndz" />
        <meta name="twitter:description" content="View our comprehensive dog grooming services and pricing. Professional grooming for all breeds." />
      </Helmet>

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
                src="/images/price-list-1.jpg" 
                alt="Zephyr Houndz Full Groom and Tidy Groom Price List" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Second Price List Image */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <img 
                src="/images/price-list-2.jpg" 
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
    </>
  );
};

export default Services;