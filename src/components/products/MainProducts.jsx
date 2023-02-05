import React from 'react';
import DetailsProduct from '@/components/products/col-detalles/DetailsProduct';
import MainImagenes from '@/components/products/col-imagenes/MainImagenes';

import img1 from '@/assets/images/image-product-1.jpg';
import img2 from '@/assets/images/image-product-2.jpg';
import img3 from '@/assets/images/image-product-3.jpg';
import img4 from '@/assets/images/image-product-4.jpg';
import imgSmall1 from '@/assets/images/image-product-1-thumbnail.jpg';
import imgSmall2 from '@/assets/images/image-product-2-thumbnail.jpg';
import imgSmall3 from '@/assets/images/image-product-3-thumbnail.jpg';
import imgSmall4 from '@/assets/images/image-product-4-thumbnail.jpg';

const ARRAY_IMGS = [img1, img2, img3, img4];
const ARRAY_IMGS_SMALL = [imgSmall1, imgSmall2, imgSmall3, imgSmall4];

const objectProduct = {
  id: 1,
  title: 'Fall Limited Edition Sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  subtitle: 'Sneaker Company',
  price: 250,
  discount: 0.4,
  imagesMain: ARRAY_IMGS,
  imagesThumbnail: ARRAY_IMGS_SMALL,
};

const MainProducts = () => {
  return (
    <main className="grid grid-cols-1 place-items-center gap-8 md:relative md:min-h-[calc(100vh-10px)] md:max-w-[90%] md:grid-cols-2">
      <MainImagenes
        ARRAY_IMGS={objectProduct.imagesMain}
        ARRAY_IMGS_SMALL={objectProduct.imagesThumbnail}
      />
      <DetailsProduct objectProduct={objectProduct} />
    </main>
  );
};

export default MainProducts;
