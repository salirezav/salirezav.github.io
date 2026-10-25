import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ZoomableImage from './ZoomableImage';

interface ImageCarouselProps {
  images: { url: string; alt: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  const gallery = images.map((image) => ({ src: image.url, alt: image.alt }));

  return (
    <div className="mt-4 mb-4">
      <h6 className="text-sm font-semibold text-gray-700 mb-3">Gallery:</h6>
      <div className="relative w-full">
        <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-md md:h-[420px]">
          <ZoomableImage
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="max-h-80 max-w-full object-contain md:max-h-[420px]"
            gallery={gallery}
            galleryIndex={currentIndex}
            counter={images.length > 1 ? `${currentIndex + 1} / ${images.length}` : undefined}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-green-500 shadow-md scale-105'
                    : 'border-gray-200 hover:border-green-300 opacity-70 hover:opacity-100'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
