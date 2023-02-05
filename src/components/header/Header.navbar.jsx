import React from 'react';

import CloseIcon from '@/components/icons/CloseIcon';

const Navbar = () => {
  
  const handleCloseMenu = () => {
    console.log('close');
  };

  return (
    <nav className="hidden w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold text-gray-400 md:static md:mr-auto md:flex md:flex-row md:gap-4 md:py-4">
      <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
        <CloseIcon />
      </button>
      <a href="#">Collections</a>
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  );
};

export default Navbar;
