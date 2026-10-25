import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface ZoomImage {
  src: string;
  alt?: string;
}

interface LightboxProps {
  images: ZoomImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, index, onIndexChange, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const onIndexChangeRef = useRef(onIndexChange);
  const indexRef = useRef(index);
  const imagesRef = useRef(images);

  onCloseRef.current = onClose;
  onIndexChangeRef.current = onIndexChange;
  indexRef.current = index;
  imagesRef.current = images;

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      const slides = imagesRef.current;
      const current = indexRef.current;
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (slides.length > 1 && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
        event.preventDefault();
        const delta = event.key === 'ArrowRight' ? 1 : -1;
        onIndexChangeRef.current((current + delta + slides.length) % slides.length);
        return;
      }
      if (event.key !== 'Tab') return;
      const dialog = document.getElementById('image-lightbox');
      if (!dialog) return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  const image = images[index];
  if (!image) return null;
  const caption = image.alt?.trim() ?? '';
  const multiple = images.length > 1;
  const go = (delta: number) => onIndexChange((index + delta + images.length) % images.length);

  return createPortal(
    <div
      id="image-lightbox"
      className="lightbox-backdrop fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label={caption || 'Expanded image'}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="image-chip absolute right-3 top-3 z-20 h-10 w-10 p-0"
        aria-label="Close"
        onClick={onClose}
      >
        <X size={18} aria-hidden="true" />
      </button>

      {multiple && (
        <button
          type="button"
          className="image-chip absolute left-3 top-1/2 z-20 h-10 w-10 -translate-y-1/2 p-0"
          aria-label="Previous image"
          onClick={(event) => {
            event.stopPropagation();
            go(-1);
          }}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
      )}

      <figure
        className="flex max-h-full max-w-full flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative inline-flex max-w-full">
          <img
            src={image.src}
            alt={caption}
            className={`h-auto w-auto max-w-[calc(100vw-4.5rem)] object-contain ${
              caption ? 'max-h-[calc(100vh-7.5rem)]' : 'max-h-[calc(100vh-3.5rem)]'
            }`}
          />
          {multiple && (
            <span className="image-chip pointer-events-none absolute bottom-2 left-2">
              {index + 1} / {images.length}
            </span>
          )}
        </div>
        {caption && (
          <figcaption className="mt-3 max-w-[calc(100vw-3rem)] text-center text-sm text-white/85">
            {caption}
          </figcaption>
        )}
      </figure>

      {multiple && (
        <button
          type="button"
          className="image-chip absolute right-3 top-1/2 z-20 h-10 w-10 -translate-y-1/2 p-0"
          aria-label="Next image"
          onClick={(event) => {
            event.stopPropagation();
            go(1);
          }}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      )}
    </div>,
    document.body
  );
};

export default Lightbox;
