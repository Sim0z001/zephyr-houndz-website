import React, { useState, useRef } from 'react';
import { Facebook, Instagram, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Debugging: Log form data before sending
    console.log('Form Data:', formData);
    console.log('Form Current:', form.current);

    // Replace these with your actual EmailJS details
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debugging: Log EmailJS configuration
    console.log('Service ID:', SERVICE_ID);
    console.log('Template ID:', TEMPLATE_ID);
    console.log('Public Key:', PUBLIC_KEY);

    // Validate configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'EmailJS configuration is missing. Please check your environment variables.'
      });
      return;
    }

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email sent successfully:', result);
      setStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, (error) => {
      console.error('Email send error:', error);
      
      // More detailed error handling
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.text) {
        errorMessage += ` Error details: ${error.text}`;
      }

      if (error.status) {
        errorMessage += ` Status: ${error.status}`;
      }

      setStatus({
        type: 'error',
        message: errorMessage
      });
    });
  };

  return (
    <div className="min-h-screen bg-page-background py-0">
      <div className="container mx-auto px-8">
        <h1 className="text-5xl font-bold text-center text-zephyr-ashbrown mb-12">
          Contact Us
        </h1>
        <div className="max-w-4xl mx-auto">
          {/* Contact Form Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
            {/* Status Message */}
            {status.message && (
              <div className={`mb-4 p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {status.message}
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label className="block text-zephyr-ashbrown mb-2" htmlFor="name">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="user_name" // Updated for EmailJS template
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-zephyr-mint"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-zephyr-ashbrown mb-2" htmlFor="email">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email" // Updated for EmailJS template
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-zephyr-mint"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              
              {/* Phone Number Field */}
              <div className="mb-4">
                <label className="block text-zephyr-ashbrown mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="user_phone" // Added for EmailJS template
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-zephyr-mint"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-zephyr-ashbrown mb-2" htmlFor="message">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" // Keep as "message" for EmailJS template
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-zephyr-mint"
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-zephyr-mint text-zephyr-ashbrown py-3 rounded-full font-bold
                hover:opacity-90 transition-all transform hover:-translate-y-1 
                hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-zephyr-mint"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-zephyr-ashbrown mb-6 text-center">
              Other Ways to Reach Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-zephyr-ashbrown mb-4">
                  Location
                </h3>
                <p className="text-gray-700 mb-2">Mountain Creek</p>
                <p className="text-gray-700">Sunshine Coast, QLD</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zephyr-ashbrown mb-4">
                  Contact Details
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    0475 455 654
                  </span>
                </p>
                <p className="text-gray-700 mb-2">Email: zephyrhoundz@gmail.com</p>
                <div className="flex space-x-4 mt-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61567924250405" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-zephyr-ashbrown hover:text-opacity-80"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </a>
                  <a 
                    href="https://www.instagram.com/zephyr.houndz/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-zephyr-ashbrown hover:text-opacity-80"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;