import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const Home = () => {
  const heroImages = [
    '/images/banner/banner_1.webp',
    '/images/banner/banner_2.webp',
    '/images/banner/banner_3.webp',
    '/images/banner/banner_4.webp',
    '/images/banner/banner_5.webp',
    '/images/banner/banner_6.webp'
  ];

  return (
    <div className="min-h-screen bg-page-background relative">
      {/* Hero Section with Image Carousel */}
      <div className="relative z-10">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="aspect-[16/9] w-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                {index === heroImages.length - 1 ? (
                  // Logo slide
                  <div className="w-full h-full bg-page-background flex items-center">
                    <div className="w-1/2 h-full flex items-center justify-center ml-0">
                      <img 
                        src={image} 
                        alt="Zephyr Houndz Logo" 
                        className="max-w-[70%] max-h-[70%] object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  // Regular image slides
                  <>
                    <img 
                      src={image} 
                      alt={`Zephyr Houndz Grooming ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay Content - Contact Info */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4 
          md:top-[30%] 
          sm:top-[50%] 
          top-[60%]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Zephyr Houndz Dog Grooming
          </h1>
          
          {/* Contact and Location */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-8 flex-wrap">
            <div className="flex items-center mb-2 sm:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a 
                href="tel:0475455654" 
                className="text-sm sm:text-base text-white"
              >
                0475 455 654
              </a>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
              </svg>
              <span className="text-sm sm:text-base text-white">Mountain Creek</span>
            </div>
          </div>

          {/* Book Now Button */}
          <a 
            href="/booking" 
            className="inline-block bg-zephyr-mint text-zephyr-ashbrown px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold 
            text-sm sm:text-base
            shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 
            hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-zephyr-mint"
          >
            Book Now
          </a>
        </div>
      </div>

        {/* Description Section */}
        <section className="relative z-10 py-16 bg-page-background">
        <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-base sm:text-lg text-zephyr-ashbrown text-center">
            A cozy, home-based studio specializing in breed styling. We provide individualized care that goes beyond grooming—treating each dog like family in a calm, stress-free environment. Our two-person team ensures every dog receives personalized attention and expert grooming.
            </p>
        </div>
        </section>
    </div>
  );
};

export default Home;