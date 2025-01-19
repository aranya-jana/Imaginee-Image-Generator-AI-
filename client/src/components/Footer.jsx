import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const iconVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 120, delay: index * 0.3 },
  }),
};

const Footer = () => {
  const socialIcons = [
    { src: assets.facebook_icon, alt: 'Facebook' },
    { src: assets.instagram_icon, alt: 'Instagram' },
    { src: assets.twitter_icon, alt: 'Twitter' },
    { src: assets.ytube, alt: 'YouTube' },
  ];

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 py-4 mt-16 md:mt-30 text-white">
      {/* Text Section */}
      <motion.p 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="w-full md:w-auto text-center md:text-left flex-1 pl-4 text-sm"
      >
        © Imaginee | All Rights Reserved
      </motion.p>

      {/* Social Icons Section */}
      <div className="flex justify-center md:justify-end gap-4 w-full md:w-auto">
        {socialIcons.map((icon, index) => (
          <motion.img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="w-8 h-8"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={iconVariants}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
