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
  expect(screen.getByRole('heading', { level: 1, name: /Seyed Alireza Vaezi, PhD/i })).toBeInTheDocument();
  const githubLinks = screen.getAllByRole('link', { name: 'GitHub' });
  expect(githubLinks.length).toBeGreaterThan(0);
  githubLinks.forEach((github) => {
    expect(github).toHaveAttribute('title', 'GitHub');
    expect(github).toHaveAttribute('aria-label', 'GitHub');
  });
});
