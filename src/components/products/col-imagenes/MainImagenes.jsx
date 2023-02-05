import React, { useState } from 'react';
import GalleryProduct from '@/components/products/col-imagenes/GalleryProduct';
import ModalProduct from '@/components/products/col-imagenes/GalleryProduct';

const MainImagenes = ({ ARRAY_IMGS, ARRAY_IMGS_SMALL }) => {
  const [isOpenModal, setisOpenModal] = useState(false);

  const handleOpenModal = () => window.innerWidth > 768 && setisOpenModal(true);

  const handleCloseModal = () => {
    setisOpenModal(false);
  };

  return (
    <div>
      <GalleryProduct
        ARRAY_IMGS={ARRAY_IMGS}
        ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
        className="grid md:w-[80%] md:grid-cols-4 md:gap-4 md:p-16"
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <>
          <span 
          onClick={handleCloseModal}
          className="fixed z-40 top-0 left-0 right-0 h-full w-full bg-black/70 backdrop-blur-md"></span>
          <ModalProduct
            ARRAY_IMGS={ARRAY_IMGS}
            ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
            isOpenModal={isOpenModal}
            handleCloseModal={handleCloseModal}
            className="hidden z-50  md:absolute md:top-0 md:left-0 md:grid md:w-[80%] md:max-w-lg md:translate-x-1/2 md:grid-cols-4 md:gap-4 lg:translate-x-full"
          />
        </>
      )}
    </div>
  );
};

export default MainImagenes;
