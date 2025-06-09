import React from "react";
import { Instagram } from "lucide-react";
import { Helmet } from "react-helmet-async";


const Portraits = () => {
  return (
    <>
      <Helmet>
        <title>Custom Pet Portraits | Handpainted by Zephyr Houndz</title>
        <meta
          name="description"
          content="Order a custom watercolour portrait of your pet, handpainted in Mountain Creek. A meaningful keepsake or thoughtful gift from Zephyr Houndz."
        />
        <meta
          name="keywords"
          content="custom pet portrait, handpainted dog portrait, Mountain Creek, watercolour pet painting, memorial pet gift"
        />
        <meta
          property="og:title"
          content="Custom Pet Portraits | Zephyr Houndz"
        />
        <meta
          property="og:description"
          content="Locally handpainted pet portraits by Megan Ng in Mountain Creek. A special keepsake to cherish forever."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.zephyrhoundz.com.au/portraits"
        />
      </Helmet>
      <div className="bg-page-background">
        <div className="container mx-auto px-4 pb-16">
          {/* Header */}
          <h1 className="text-5xl font-bold text-center text-zephyr-ashbrown mb-4">
            Custom Pet Portrait Painting
          </h1>

          {/* Description section */}
          <div className="bg-white rounded-3xl p-6 shadow-lg max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold text-zephyr-ashbrown mb-4">
              About Zephyr Palette & the artist Megan Ng
            </h2>
            <p className="mb-4 text-gray-700">
              My journey began when I created my first pet portrait for a dear
              friend who had lost their beloved dog. It was a way to honor their
              pet's memory and offer comfort during a difficult time. I believe
              every pet has a unique story, and capturing that bond in a
              beautiful, lasting portrait helps preserve those cherished
              memories for years to come.
            </p>
            <p className="mb-4 text-gray-700">
              Whether it's for your own pet or a gift for a loved one, my goal
              is to create a meaningful piece of art that reflects the love and
              joy pets bring into our lives.
            </p>
            <p className="text-gray-700">
              <strong>100% locally handpainted</strong> in watercolour on
              premium cotton paper. All customised — as basic as just the pet on
              a plain background or without a background, with or without the
              pet's name, additional pets on the same paper — we would love to
              hear the ideas from you.
            </p>
          </div>

          {/* Sample Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white rounded-3xl p-4 shadow-lg flex justify-center items-center h-[420px]">
              <img
                src="/images/portraits/image2.webp"
                alt="Custom Portrait 1"
                width="336"
                height="420"
                className="max-h-full max-w-full object-contain rounded-2xl"
              />
            </div>
            <div className="bg-white rounded-3xl p-4 shadow-lg flex justify-center items-center h-[420px]">
              <img
                src="/images/portraits/image3.webp"
                alt="Custom Portrait 2"
                width="336"
                height="420"
                className="max-h-full max-w-full object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-xl font-semibold text-zephyr-ashbrown">
              Ready to get started?
            </h3>
            <div className="flex flex-col items-center space-y-4">
              {/* Order Now First */}
              <a
                href="https://zephyrhoundz.square.site/shop/custom-pet-portrait-painting/UBYJLEO2XFR7VZ32XTVBHCUJ"
                className="inline-block bg-zephyr-mint text-zephyr-ashbrown px-6 py-3 rounded-full font-bold 
                text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-zephyr-mint"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/zephyr.palette"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-zephyr-ashbrown text-zephyr-ashbrown font-semibold 
                px-6 py-2 rounded-full hover:bg-zephyr-ashbrown hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
                View More on Instagram
              </a>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="max-w-md mx-auto">
            <div className="aspect-w-9 aspect-h-16">
              <iframe
                className="w-full h-[420px] rounded-2xl shadow-lg"
                src="https://www.youtube.com/embed/QaaYWZZIM7g"
                title="Custom Portrait Behind the Scenes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portraits;
