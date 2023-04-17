import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import { RxDotFilled } from 'react-icons/rx';
import { useMediaQuery } from "react-responsive";

export default function Carousel(slides) {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(slides)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={`max-w-[250px] h-[250px] pt-0 pb-0 mt-0 mb-5 m-auto py-4 px-4 relative group`} >
      <img
        src={ slides.images[currentIndex] }
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      /> 
      { slides.images.length > 1 &&
      <>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
      </>
      }
      <div className='flex justify-center py-2'>
        { slides.images.length > 1 &&
        slides.images.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}