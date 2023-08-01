import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-300'>
      <div className='container mx-auto py-8 flex flex-wrap justify-between'>
        <div className='w-full md:w-1/3'>
          <h3 className='text-lg font-bold mb-4'>
            Child Abuse Management System
          </h3>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </p>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-lg font-bold mb-4'>Useful Links</h3>
          <ul className='text-sm'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
          <p className='text-sm'>123 Street, City, Country</p>
          <p className='text-sm'>info@example.com</p>
          <p className='text-sm'>123-456-7890</p>
        </div>
      </div>
      <div className='bg-gray-700 py-4 text-center'>
        <p className='text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} Child Abuse Management System. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
