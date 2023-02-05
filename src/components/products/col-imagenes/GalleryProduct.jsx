import React, { useState, useRef, useEffect } from 'react';

import PreviousIcon from '@/components/icons/PreviousIcon.jsx';
import NextIcon from '@/components/icons/NextIcon.jsx';

const GalleryProduct = ({
  ARRAY_IMGS = [],
  ARRAY_IMGS_SMALL = [],
  isOpenModal = false,
  handleCloseModal = null,
  handleOpenModal = null,
  ...props
}) => {
  const [index, setIndex] = useState(0);
  const btnSlider = useRef(null);

  /*solo aparecen los botones en pantallas md*/
  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove('md:hidden');
  }, [isOpenModal]);

  const handleBtnPrevious = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
  };
  const handleBtnNext = () => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <section {...props}>
      <div className="relative col-span-4 aspect-[16/12] w-full">
        {isOpenModal && (
          <div className="m-1 flex justify-end">
            <button onClick={handleCloseModal} className="rounded-full text-white">
              X
            </button>
          </div>
        )}
        <img
          className="cursor-zoom-in rounded-xl"
          src={ARRAY_IMGS[index]}
          alt="imagen de producto"
          onClick={handleOpenModal}
        />
        <div
          ref={btnSlider}
          className="absolute top-1/2 right-0 left-0 flex md:hidden"
        >
          <button
            className="ml-2 grid w-8 h-8 cursor-pointer place-items-center rounded-full bg-slate-300 p-2"
            onClick={handleBtnPrevious}
          >
            <PreviousIcon />
          </button>
          <button
            className="mr-2 ml-auto w-8 h-8 grid cursor-pointer place-items-center rounded-full bg-slate-300 p-2"
            onClick={handleBtnNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {/*imagenes miniatura*/}
      {ARRAY_IMGS_SMALL.map((smallImg, i) => (
        <div
          key={i}
          onClick={() => {
            {
              /*click y cambia imagen*/
            }
            setIndex(i);
          }}
          className="relative overflow-hidden hover:rounded-lg hover:ring-2 hover:ring-orange-400 hover:ring-offset-2"
        >
          <img
            src={smallImg}
            alt="imagen de producto"
            className="hidden rounded-xl md:relative md:block"
          />
          <span className="top-0 h-full w-full cursor-pointer opacity-50 hover:bg-slate-100 md:absolute "></span>
        </div>
      ))}
    </section>
  );
};

export default GalleryProduct;
