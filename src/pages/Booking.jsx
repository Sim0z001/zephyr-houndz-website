import React from 'react';

const Booking = () => {
  // Your Square booking URL
  const squareBookingUrl = "https://square.site/book/LFKG5CXVHPBDC/zephyr-houndz";

  return (
    <div className="min-h-screen bg-page-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-zephyr-ashbrown mb-12">
          Book an Appointment
        </h1>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-zephyr-ashbrown mb-6">
              Booking Information
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Please select your preferred service and time. Your pet will receive 
                dedicated attention throughout their grooming session.
              </p>
              <div className="bg-zephyr-mint bg-opacity-20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-zephyr-ashbrown mb-4">
                  Before Your Appointment
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-zephyr-mint rounded-full mr-2 mt-2"></span>
                    <span>Please ensure your pet is up to date with vaccinations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-zephyr-mint rounded-full mr-2 mt-2"></span>
                    <span>Let us know of any health concerns or special requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-zephyr-mint rounded-full mr-2 mt-2"></span>
                    <span>For more than one dog appointment, please add a note in the booking to let us know</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-zephyr-mint rounded-full mr-2 mt-2"></span>
                    <span>Please read and sign our service agreement. it will be sent to you via txt after booking request</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Link to Square Booking */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <p className="text-gray-700 mb-6">
              Click below to book your appointment through our secure booking system.
            </p>
            <a 
              href={squareBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-zephyr-mint text-zephyr-ashbrown px-8 py-4 rounded-full font-bold 
              text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-zephyr-mint"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;