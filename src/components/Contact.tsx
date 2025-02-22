import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import * as THREE from 'three'; 
import GLOBE from 'vanta/dist/vanta.globe.min';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Ref for the Vanta.js container
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  // Initialize Vanta.js effect
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE, // Pass the Three.js library
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3a86ff, // Adjust the globe color to match your theme
          backgroundColor: 0x0, // Dark background
        })
      );
    }

    // Clean up Vanta.js effect on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Validation function
  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    // Validate form
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Your EmailJS credentials
      const serviceId = 'service_4th26su';
      const templateId = 'template_w76e55i';
      const publicKey = 'kiAI6kF2bP9TBbqaq';

      // Send the email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear errors when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  return (
    <section className="relative py-20" id="contact" ref={vantaRef}>
      {/* Overlay to ensure content readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-500 mr-4" />
                <span className="text-gray-300">tmahmudsuzon@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-500 mr-4" />
                <span className="text-gray-300">+8801744336039</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-500 mr-4" />
                <span className="text-gray-300">Banasree, Dhaka</span>
              </div>
            </div>

            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.034287102319!2d90.42431601419932!3d23.75598729831483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78a3f09a931%3A0x2268195f17f057c!2sShwapno%20-%20North%20Banasree!5e0!3m2!1sen!2sbd!4v1740215776981!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {isSuccess && (
                <p className="text-green-500 text-center mt-4">
                  Message sent successfully!
                </p>
              )}

              {isError && (
                <p className="text-red-500 text-center mt-4">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;