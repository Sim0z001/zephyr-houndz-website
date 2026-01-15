import React from "react";
import { Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Zephyr Houndz | Meet Your Groomers</title>
        <meta
          name="description"
          content="Meet Megan and Simon — the passionate groomers behind Zephyr Houndz in Mountain Creek. Learn about their background, qualifications, and furry family."
        />
        <meta
          name="keywords"
          content="about Zephyr Houndz, Mountain Creek groomers, dog grooming team, dog grooming bio, dog groomers Sunshine Coast"
        />
        <meta
          property="og:title"
          content="About Zephyr Houndz | Meet Your Groomers"
        />
        <meta
          property="og:description"
          content="Learn more about our expert grooming team in Mountain Creek. Megan and Simon offer gentle, professional care for every dog."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.zephyrhoundz.com.au/about"
        />
      </Helmet>
      <div className="min-h-screen bg-page-background py-0">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-zephyr-ashbrown mb-12">
            About Zephyr Houndz
          </h1>

          {/* Meet Your Groomer Sections */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-zephyr-ashbrown mb-4">
                    Dog Stylist
                  </h2>
                  <h2 className="text-2xl font-bold text-zephyr-ashbrown mb-4">
                    Megan
                  </h2>
                  <p className="text-gray-700 mb-4">
                    With over 5 years of experience working at high-end dog
                    grooming salons across Australia, I created my own calming
                    home-based studio to offer a stress-free grooming
                    experience. Growing up with a Toy Poodle and now owning a
                    Labradoodle, I have a true passion for all animals,
                    especially dogs.
                  </p>
                  <p className="text-gray-700 mb-4">
                    I studied animal welfare and volunteered as a wildlife
                    rescuer in Victoria, which helped me develop a gentle,
                    patient approach, especially with special needs dogs. I stay
                    up to date with the latest grooming trends and am skilled in
                    styling all breeds. Your dog's comfort is always my
                    priority.
                  </p>
                  <div className="bg-zephyr-mint bg-opacity-20 rounded-2xl p-6 mb-4">
                    <h3 className="text-xl font-bold text-zephyr-ashbrown mb-3">
                      Qualifications
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-zephyr-mint rounded-full mr-2"></span>
                        Certificate in Dog Grooming
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-zephyr-mint rounded-full mr-2"></span>
                        Animal Welfare Studies
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-zephyr-mint rounded-full mr-2"></span>
                        Pet First Aid Certification
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-zephyr-mint rounded-full mr-2"></span>
                        Dog Training and Obedience Certificate
                      </li>
                      <li className="flex items-center text-zephyr-ashbrown font-semibold">
                        <Award className="w-5 h-5 mr-2 text-yellow-500" />
                        1st Place, Best in Group - Model Dog (Poodle Styling)
                        2023 Brisbane Groomathon
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    I promise to treat your furry family members with the same
                    dedication and gentle care I give to my own pets, ensuring
                    they have a positive and comfortable grooming experience.
                  </p>
                </div>
                <div className="relative mt-6">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="/images/about/megan-profile.webp"
                      alt="Megan - Professional Dog Groomer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Existing Furry Family section */}
          <div className="max-w-4xl mx-auto pb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-zephyr-ashbrown mb-6 text-center">
                Meet Our Furry Family
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-lg mb-4">
                    <img
                      src="/images/about/dog1.webp"
                      alt="Our Greyhound"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-medium text-zephyr-ashbrown mb-2">
                      Milo
                    </p>
                  </div>
                </div>
                <div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-lg mb-4">
                    <img
                      src="/images/about/dog2.webp"
                      alt="Our other furry family member"
                      className="w-full h-full object-cover contrast-125 brightness-100"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-medium text-zephyr-ashbrown mb-2">
                      Dutchie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
