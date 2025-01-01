import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 py-4 mt-16 md:mt-64  text-white">
      {/* Text Section */}
      <p className="w-full md:w-auto text-center md:text-left flex-1 pl-4 text-sm">
        © Imaginee | All Rights Reserved
      </p>

      {/* Social Icons Section */}
      <div className="flex justify-center md:justify-end gap-4 w-full md:w-auto">
        <img src={assets.facebook_icon} alt="Facebook" className="w-8 h-8" />
        <img src={assets.instagram_icon} alt="Instagram" className="w-8 h-8" />
        <img src={assets.twitter_icon} alt="Twitter" className="w-8 h-8" />
        <img src={assets.ytube} alt="YouTube" className="w-8 h-8" />
      </div>
    </footer>
  );
};

export default Footer;
