import React from "react";
import { Helmet } from "react-helmet-async";

const ProductLanding = () => {
  const petCare = [
    {
      name: "Ear Wipes (50 pack)",
      image: "/images/products/ear-wipes/earcleaner1.webp",
      description:
        "Infused with coconut oil, aloe vera & avocado extract. Gently removes wax and odors.",
      link: "https://zephyrhoundz.square.site/product/ear-wipes-50pack-/6?cs=true&cst=custom",
    },
    {
      name: "Eye Wipes (150 pack)",
      image: "/images/products/eye-wipes/eyewipes1.webp",
      description:
        "Soft, hypoallergenic cotton wipes. Removes tear stains and dirt.",
      link: "https://zephyrhoundz.square.site/product/eye-wipes-150-pack-/12?cs=true&cst=custom",
    },
    {
      name: "Paw Balm (60g)",
      image: "/images/products/paw-balm/pawbalm3.webp",
      description:
        "Soothes and protects dry, cracked paws with coconut oil and shea butter.",
      link: "https://zephyrhoundz.square.site/product/paw-balm-60g-/10?cs=true&cst=custom",
    },
    {
      name: "Ear Cleaner (50ml)",
      image: "/images/products/ear-cleaner/earcleaner3.webp",
      description:
        "Alcohol-free formula with Aloe Vera. Gently cleans and soothes ears.",
      link: "https://zephyrhoundz.square.site/product/ear-cleaner-50ml-/11?cs=true&cst=custom",
    },
    {
      name: "Toothpaste (100g)",
      image: "/images/products/tooth-paste/toothpaste5.webp",
      description:
        "Mint-flavoured, fluoride-free. Helps reduce tartar and freshen breath.",
      link: "https://zephyrhoundz.square.site/product/toothpaste-100g-/7?cs=true&cst=custom",
    },
    {
      name: "Ultra Soft Pet Toothbrush",
      image: "/images/products/toothbrush/toothbrush3.webp",
      description: "Micro head, ultra soft bristles. Gentle on sensitive gums.",
      link: "https://zephyrhoundz.square.site/product/ultra-soft-pet-toothbrush/8?cs=true&cst=custom",
    },
    {
      name: "Slater Slicker Brush",
      image: "/images/products/slater-brush/slater1.webp",
      description:
        "Professional-grade slicker brush for detangling and removing loose fur. Gentle yet effective grooming tool.",
      link: "https://zephyrhoundz.square.site/product/slater-slicker-brush/14?cs=true&cst=custom",
    },
    {
      name: "Stainless Steel Comb",
      image: "/images/products/comb/comb4.webp",
      description:
        "Premium anti-static comb ideal for finishing touches. Great for fluffing, parting, and detangling fine coats.",
      link: "https://zephyrhoundz.square.site/product/slater-stainless-comb/15?cs=true&cst=custom",
    },
  ];

  const kits = [
    {
      name: "Ear & Eye Wipes Kit (2 Pack)",
      image: "/images/products/wipe-kit/wipekit1.webp",
      description:
        "Bundle with 1x ear wipes + 1x eye wipes. Natural, alcohol-free.",
      link: "https://zephyrhoundz.square.site/product/ear-and-eye-wipes-kit-2-pack-/13?cs=true&cst=custom",
    },
    {
      name: "Dental Care Kit (Toothpaste + Toothbrush)",
      image: "/images/products/dental-kit/dentalkit2.webp",
      description:
        "Complete set with mint toothpaste + soft brush. Fights tartar & freshens breath.",
      link: "https://zephyrhoundz.square.site/product/dental-care-kit-toothpaste-toothbrush-/9?cs=true&cst=custom",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Shop Grooming Products | Zephyr Houndz</title>
        <meta
          name="description"
          content="Browse our selection of natural grooming products trusted by professional groomers. Ear wipes, paw balm, toothpaste kits & more."
        />
        <meta
          name="keywords"
          content="dog grooming products, natural dog care, pet grooming supplies, ear wipes, paw balm, dog toothpaste, Zephyr Houndz shop"
        />
        <meta
          property="og:title"
          content="Shop Grooming Products | Zephyr Houndz"
        />
        <meta
          property="og:description"
          content="Used in our Mountain Creek grooming studio, now available for pet owners across Australia."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.zephyrhoundz.com.au/shop"
        />
      </Helmet>
      <div className="min-h-screen bg-page-background text-gray-800 py-0">
        {/* Trust Banner */}
        <section className="bg-zephyr-mint text-zephyr-ashbrown text-center py-2 text-sm font-semibold">
          💚 Used in our grooming studio — now available online!
        </section>

        {/* Hero */}
        <section className="text-center py-12 px-4">
          <h1 className="text-5xl font-bold text-center text-zephyr-ashbrown mb-6">
            Dog Grooming Products
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Natural, affordable care — trusted by groomers, made for your home.
          </p>
        </section>

        {/* Pet Care */}
        <section className="py-8 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-zephyr-ashbrown mb-6 text-center">
            Pet Care
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {petCare.map((product) => (
              <div
                key={product.name}
                className="border rounded-xl p-4 shadow hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="w-full aspect-[3/4] overflow-hidden rounded-md mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-zephyr-ashbrown mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-zephyr-mint text-zephyr-ashbrown px-4 py-2 rounded-full font-bold 
                  hover:opacity-90 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Kits */}
        <section className="py-8 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-zephyr-ashbrown mb-6 text-center">
            Kits
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {kits.map((product) => (
              <div
                key={product.name}
                className="border rounded-xl p-4 shadow hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover rounded-md mb-4"
                />

                <h2 className="text-xl font-bold text-zephyr-ashbrown mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-zephyr-mint text-zephyr-ashbrown px-4 py-2 rounded-full font-bold 
                  hover:opacity-90 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Why Us */}
        <section className="py-12 px-4 bg-page-background">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-zephyr-ashbrown mb-6 text-center">
              Why Zephyr Houndz Products?
            </h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2 text-lg">
              <li>Used in our professional grooming studio</li>
              <li>Formulated with natural ingredients</li>
              <li>Gentle, effective, and affordable</li>
              <li>Backed by real groomers</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductLanding;
