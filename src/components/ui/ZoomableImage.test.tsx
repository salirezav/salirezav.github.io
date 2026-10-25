import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ZoomableImage from './ZoomableImage';
import ImageCarousel from './ImageCarousel';

test('opens a lightbox from the view-larger button and closes with Escape', () => {
  render(<ZoomableImage src="/photo.jpg" alt="Workshop photo" />);

  fireEvent.click(screen.getByRole('button', { name: 'View larger image' }));

  const dialog = screen.getByRole('dialog');
  expect(dialog).toBeInTheDocument();
  expect(screen.getByText('Workshop photo')).toBeInTheDocument();
  expect(document.body.style.overflow).toBe('hidden');

  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe('');
});

test('places the gallery counter on the bottom-left chip', () => {
  render(
    <ImageCarousel
      images={[
        { url: '/a.jpg', alt: 'First slide' },
        { url: '/b.jpg', alt: 'Second slide' },
      ]}
    />
  );

  const counter = screen.getByText('1 / 2');
  expect(counter.className).toContain('left-2');
  expect(counter.className).not.toContain('right-2');
  expect(counter.className).toContain('image-chip');
});
