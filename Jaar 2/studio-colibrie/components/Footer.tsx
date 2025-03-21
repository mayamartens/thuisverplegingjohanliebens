import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute left-0 w-full bg-white text-center">
    <div className="flex flex-wrap justify-center items-center py-1 m-5 ">
      <div className=" py-5 px-4 w-full md:w-1/4">
        <p>©STUDIO COLIBRIE</p>
      </div>
      <div className=" py-5 px-4 w-full md:w-1/4">
        <a href="tel:0475-45-25-93" className="block text-black hover:text-gray-500">Tel: 0475 45 25 93</a>
        <a href="mailto:martens.vanmulligen@gmail.com" className="block text-black hover:text-gray-500">martens.vanmulligen@gmail.com</a>
      </div>
      <div className=" py-5 px-4 w-full md:w-1/4">
        <a href="privacy.html" className="block text-black hover:text-gray-500">Privacy</a>
      </div>
    </div>
  </footer>
);
};

export default Footer;