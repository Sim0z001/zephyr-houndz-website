import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zephyr-mint text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-zephyr-ashbrown">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-zephyr-ashbrown" />
                <a href="tel:0475455654" className="hover:underline">
                  0475 455 654
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-zephyr-ashbrown" />
                <a href="mailto:zephyrhoundz@gmail.com" className="hover:underline">
                  zephyrhoundz@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-zephyr-ashbrown" /> Mountain Creek, Sunshine Coast
              </p>
            </div>
          </div>
          {/* Rest of the footer remains the same */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;