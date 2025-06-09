import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Dog Grooming Services & Pricing | Zephyr Houndz</title>
        <meta
          name="description"
          content="Explore Zephyr Houndz's dog grooming packages in Mountain Creek. Full grooms, tidy ups, bath options and extras — all in a calm, home-based salon."
        />
        <meta
          name="keywords"
          content="dog grooming services, Mountain Creek, dog wash, tidy groom, full groom, pet care"
        />
        <meta property="og:title" content="Dog Grooming Services | Zephyr Houndz" />
        <meta
          property="og:description"
          content="Premium grooming packages for your dog — tailored care in our home-based salon in Mountain Creek."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zephyrhoundz.com.au/services" />
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
            <h2 className="sr-only">Full Groom & Tidy Groom Prices</h2>

            <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
              <img 
                src="/images/services/price-list-1.webp" 
                alt="Zephyr Houndz Full Groom and Tidy Groom Price List" 
                width="828"
                height="970"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <h2 className="sr-only">Bath & Add-on Service Prices</h2>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <img 
                src="/images/services/price-list-2.webp" 
                alt="Zephyr Houndz Bath Services and Add-on Price List" 
                width="828"
                height="738"
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
