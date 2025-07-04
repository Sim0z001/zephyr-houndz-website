import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { Phone, MapPin } from 'lucide-react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  const heroImages = [
    '/images/banner/banner_1.webp',
    '/images/banner/banner_2.webp',
    '/images/banner/banner_3.webp',
    '/images/banner/banner_4.webp',
    '/images/banner/banner_5.webp',
    '/images/banner/banner_6.webp'
  ];

  const promotions = [
    {
      title: 'Custom Pet Portraits 🎨',
      description: 'Celebrate your furry friend with a custom watercolour portrait by Megan from Zephyr Palette. Hand-painted with love on premium paper, perfect as a gift or keepsake.',
      buttonText: 'View Portraits',
      buttonLink: '/portraits'
    },
    {
      title: 'Refer a Friend',
      description: "Spread the love for your furry friends and enjoy the rewards. Refer a friend and you'll receive $10 off coupon per referral.",
      buttonText: 'Learn More',
      buttonLink: 'https://www.facebook.com/share/p/1A8YkKcpCa/'
    },
    {
      title: 'E-Vouchers Available',
      description: 'Give the gift of pampering! Our e-vouchers are the perfect present for dog lovers. Convenient, thoughtful, and always appreciated.',
      buttonText: 'Buy Now',
      buttonLink: 'https://app.squareup.com/gift/ML633ZCJDWT29/order'
    },
    {
      title: '4 Paws Rescue Discount',
      description: 'Support local rescue! 10% off the first visit for dogs adopted from 4 Paws Animal Rescue. Help us celebrate these special furry friends and their forever homes.',
      buttonText: 'Learn More',
      buttonLink: 'https://www.facebook.com/share/p/1EMQbXjgQV/'
    }
  ];

  return (
    <div className="min-h-screen bg-page-background flex flex-col">
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

          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-8 flex-wrap">
            <div className="flex items-center mb-2 sm:mb-0">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-2" />
              <a 
                href="tel:0475455654" 
                className="text-sm sm:text-base text-white"
              >
                0475 455 654
              </a>
            </div>

            <div className="flex items-center">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-2" />
              <span className="text-sm sm:text-base text-white">Mountain Creek</span>
            </div>
          </div>

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
      <section className="relative z-10 bg-page-background flex-grow">
        <div className="container mx-auto px-4 max-w-4xl h-full flex items-center justify-center py-8 md:py-16">
          <p className="text-sm sm:text-base md:text-lg text-zephyr-ashbrown text-center">
            A cozy, home-based studio specializing in breed styling. We provide individualized care that goes beyond 
            grooming—treating each dog like family in a calm, stress-free environment. Our two-person team ensures 
            every dog receives personalized attention and expert grooming.
          </p>
        </div>
      </section>

      {/* Promotions Carousel Section */}
      <section className="relative z-10 bg-zephyr-mint bg-opacity-20 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            className="promotions-swiper"
          >
            {promotions.map((promo, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zephyr-ashbrown text-center mb-4 max-w-xl mx-auto">
                    {promo.title}
                  </h2>
                  <p className="text-sm sm:text-base text-zephyr-ashbrown text-center mb-4 max-w-2xl mx-auto">
                    {promo.description}
                  </p>
                  <div className="text-center">
                    <a 
                      href={promo.buttonLink}
                      className="inline-block bg-zephyr-mint text-white px-6 py-2 rounded-full font-bold 
                      hover:bg-opacity-90 transition-colors"
                    >
                      {promo.buttonText}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;