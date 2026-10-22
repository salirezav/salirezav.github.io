import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders portfolio header with name', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Seyed Alireza Vaezi, PhD/i)).toBeInTheDocument();
  const github = screen.getByRole('link', { name: 'GitHub' });
  expect(github).toHaveAttribute('title', 'GitHub');
  expect(github).toHaveAttribute('aria-label', 'GitHub');
});
