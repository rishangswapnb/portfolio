import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home page logo', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const logoElement = screen.getByAltText(/custom logo/i);
  expect(logoElement).toBeInTheDocument();
});
