import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import Lightbox, { ZoomImage } from './Lightbox';

interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
  frameClassName?: string;
  gallery?: ZoomImage[];
  galleryIndex?: number;
  counter?: string;
  overlay?: React.ReactNode;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt = '',
  className = '',
  frameClassName = 'relative inline-flex max-h-full max-w-full',
  gallery,
  galleryIndex = 0,
  counter,
  overlay,
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(galleryIndex);
  const slides = gallery && gallery.length > 0 ? gallery : [{ src, alt }];

  const openLightbox = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveIndex(galleryIndex);
    setOpen(true);
  };

  return (
    <>
      <div className={frameClassName}>
        <img src={src} alt={alt} className={className} />
        {overlay}
        {counter && (
          <span className="image-chip pointer-events-none absolute bottom-2 left-2 z-10">
            {counter}
          </span>
        )}
        <button
          type="button"
          className="zoom-trigger image-chip absolute bottom-2 right-2 z-20 h-8 w-8 p-0"
          aria-label="View larger image"
          onClick={openLightbox}
        >
          <Maximize2 size={15} aria-hidden="true" />
        </button>
      </div>
      {open && (
        <Lightbox
          images={slides}
          index={Math.min(activeIndex, slides.length - 1)}
          onIndexChange={setActiveIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ZoomableImage;
