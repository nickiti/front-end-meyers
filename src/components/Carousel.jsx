import { useState } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import { RxDotFilled } from 'react-icons/rx';

export default function Carousel(slides, height, width) {
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
    <div className={`container pt-0 pb-0 mt-0 mb-5 m-auto py-4 px-4 relative group flex justify-center items-center flex-col`} >
      <img
        src={ slides.images[currentIndex] }
        alt=''
        className={`max-h-[${height}px] min-h-[${height}px] min-w-[${width}px] max-w-[${width}px] w-full h-full rounded-2xl bg-center bg-cover duration-500 w-100
        h-auto`}
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