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
                <Phone className="w-4 h-4 mr-2 text-zephyr-ashbrown" /> 0475 455 654
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-zephyr-ashbrown" /> zephyrhoundz@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-zephyr-ashbrown" /> Mountain Creek, Sunshine Coast
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-zephyr-ashbrown">Hours</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-zephyr-ashbrown" /> Mon-Sat: 8am - 4pm
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-zephyr-ashbrown" /> Sun: Closed
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-zephyr-ashbrown">Follow Us</h3>
            <div className="flex space-x-4 items-center">
              <a 
                href="https://www.facebook.com/profile.php?id=61567924250405" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-zephyr-ashbrown flex items-center"
              >
                <Facebook className="w-5 h-5 text-zephyr-ashbrown hover:opacity-80" />
                <span className="ml-2">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/zephyr.houndz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-zephyr-ashbrown flex items-center"
              >
                <Instagram className="w-5 h-5 text-zephyr-ashbrown hover:opacity-80" />
                <span className="ml-2">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;