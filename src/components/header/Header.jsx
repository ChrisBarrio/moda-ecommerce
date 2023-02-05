import React, { useState, useContext } from 'react';

import { useCartDetails } from '@/context/useCartDetails';

import logo from '@/assets/images/logo.svg';
import CloseIcon from '@/components/icons/CloseIcon';

import userAvatar from '@/assets/images/image-avatar.png';

// import Navbar from './Header.navbar';
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import NavLink from '@/components/header/NavLink';
import CardDetails from './CardDetails';

const Header = () => {
  const [openCarrito, setOpenCarrito] = useState(false);
  const [navClass, setNavClass] = useState(
    'hidden font-bold text-gray-400 md:static md:mr-auto md:flex md:flex-row md:gap-8 md:py-4 md:ml-8'
  );
  const handleOpenMenu = () => {
    console.log('open');
    setNavClass(
      'z-20 absolute top-0 left-0 flex h-screen border-r-orange-200 border-2 w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold text-gray-400 md:static md:mr-auto md:flex md:flex-row md:gap-4 md:py-4 '
    );
  };
  const handleCloseMenu = () => {
    console.log('close');
    setNavClass(
      'hidden font-bold text-gray-400 md:static md:mr-auto md:flex md:flex-row md:gap-4 md:py-4'
    );
  };

  const { cartProducts,totalQuantityProduct } = useContext(useCartDetails);

  return (
    <>
      <header className="container relative mx-auto flex items-center gap-4 px-4 py-6">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          className="mr-auto mb-1 md:mr-0"
          src={logo}
          alt="logo de la empresa"
        />
        <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLink href={'#'} text={'Collections'} />
          <NavLink href={'#'} text={'Men'} />
          <NavLink href={'#'} text={'Women'} />
          <NavLink href={'#'} text={'About'} />
          <NavLink href={'#'} text={'Contact'} />
        </nav>
        <div className="flex gap-4">
          <button className="relative">
            <CartIcon
              onClick={() => {
                setOpenCarrito(!openCarrito);
              }}
            />
            <span className="absolute w-5 top-0 rounded-full bg-orange-300 px-1 text-sm font-bold text-white">
              {totalQuantityProduct}
            </span>
          </button>
          <img
            className="w-10"
            src={userAvatar}
            alt="imagen de avatar de usuario logueado"
          />
          {openCarrito && <CardDetails />}
        </div>
      </header>
      <span className="container mx-auto block h-[1px] w-full bg-orange-200 md:block"></span>
    </>
  );
};

export default Header;
