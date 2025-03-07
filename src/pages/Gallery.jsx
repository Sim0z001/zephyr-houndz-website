import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    { 
      name: 'Sophie Gower', 
      text: 'Megan is one of the best groomers by far!! Highly recommend. She has the kindest soul and cares about every single dog like they are her own.', 
      rating: 5,
      image: '/src/assets/images/testimonials/sophie-gower.jpg'
    },
    { 
      name: 'Alice Leeson', 
      text: 'Megan did an amazing job on my almost 19-year-old dog, who has struggled with grooming anxiety. Her caring and calming nature left me reassured, and my little girl looks absolutely fabulous!', 
      rating: 5,
      image: '/src/assets/images/testimonials/alice-leeson.jpg'
    },
    { 
      name: 'Mikayla Nelson', 
      text: 'Zephyr Houndz did an incredible job on my German spitz. The attentiveness and love she put into my pup\'s groom was amazing. My pup came out with a big smile and wasn\'t stressed.', 
      rating: 5,
      image: '/src/assets/images/testimonials/mikayla-nelson.jpg'
    },
    { 
      name: 'Alice D\'Doherty', 
      text: 'Highly recommend Zephyr Houndz! Megan is so incredible with my nervous girl. She came home looking and smelling beautiful and wasn\'t stressed at all.', 
      rating: 5,
      image: '/src/assets/images/testimonials/alice-ddoherty.jpg'
    },
    { 
      name: 'Taylor Clements', 
      text: 'Our pup Marley loves her fresh groom! Megan did such a great job with our Australian shepherd, we\'ve already booked the next appointment.', 
      rating: 5,
      image: '/src/assets/images/testimonials/taylor-clements.png'
    }
  ];

  const galleryCategories = [
    { 
      title: 'Short & Comfy', 
      description: 'Easy-maintenance clips with a stylishly shaped face.',
      images: [
        '/src/assets/images/gallery/webp/short-comfy-1.webp',
        '/src/assets/images/gallery/webp/short-comfy-2.webp',
        '/src/assets/images/gallery/webp/short-comfy-3.webp',
        '/src/assets/images/gallery/webp/short-comfy-4.webp'
      ]
    },
    { 
      title: 'Fluffy & Stylish', 
      description: 'Breed-specific, detailed body styling with hand-scissored face finish.',
      images: [
        '/src/assets/images/gallery/webp/fluffy-stylish-1.webp',
        '/src/assets/images/gallery/webp/fluffy-stylish-2.webp',
        '/src/assets/images/gallery/webp/fluffy-stylish-3.webp',
        '/src/assets/images/gallery/webp/fluffy-stylish-4.webp'
      ]
    },
    { 
      title: 'Double/Triple-Coated', 
      description: 'De-Shedding & Deep Moisturizing Treatment – Leaves Fur Mat-Free & Tangle-Free',
      images: [
        '/src/assets/images/gallery/webp/working-dogs-1.webp',
        '/src/assets/images/gallery/webp/working-dogs-2.webp',
        '/src/assets/images/gallery/webp/working-dogs-3.webp',
        '/src/assets/images/gallery/webp/working-dogs-4.webp'
      ]
    },
    {
        title: 'Tidy & DeShed', 
        description: 'Precise trimming and intensive de-shedding to maintain coat health and reduce excess fur.',
        images: [
          '/src/assets/images/gallery/webp/tidy_and_deshed_1.webp',
          '/src/assets/images/gallery/webp/tidy_and_deshed_2.webp',
          '/src/assets/images/gallery/webp/tidy_and_deshed_3.webp',
          '/src/assets/images/gallery/webp/tidy_and_deshed_4.webp'
        ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 1500);
  };

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 1500);
  };

  return (
    <div className="bg-page-background">
      <div className="container mx-auto px-4 pb-16"> {/* Added negative margin-top */}
        <h1 className="text-5xl font-bold text-center text-zephyr-ashbrown mb-4"> 
          Our Grooming Gallery
        </h1>

        {/* Gallery Categories */}
        {galleryCategories.map((category, index) => (
          <section key={index} className="mb-12"> {/* Reduced margin bottom further */}
            <h2 className="text-3xl font-bold text-zephyr-ashbrown mb-1 text-center">
              {category.title}
            </h2>
            <p className="text-center text-gray-600 mb-3">{category.description}</p> {/* Reduced margin */}
            <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {/* Rest of the code remains the same */}
              {category.images.map((image, imgIndex) => (
                <div 
                  key={imgIndex} 
                  className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >
                  <div className="relative" style={{ paddingBottom: '150%' }}>
                    <img 
                      src={image} 
                      alt={`${category.title} ${imgIndex + 1}`} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Testimonials Carousel */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold text-zephyr-ashbrown mb-8 text-center">
            What Our Clients Say
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg relative overflow-hidden h-[200px]">
              {/* Previous Button */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zephyr-ashbrown hover:text-opacity-80 z-10"
              >
                &#10094;
              </button>

              {/* Next Button */}
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zephyr-ashbrown hover:text-opacity-80 z-10"
              >
                &#10095;
              </button>

              {/* Testimonial Container */}
              <div 
                className={`absolute top-0 left-0 w-full h-full flex items-center px-12 transition-all duration-1000 ease-in-out ${
                  isTransitioning ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
                }`}
              >
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name} 
                  className="w-24 h-24 rounded-full mr-8 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-600 mb-2 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex mb-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-[#6e5c4f]" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zephyr-ashbrown font-bold font-['Dancing_Script'] text-1xl">
                    - {testimonials[currentTestimonial].name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;