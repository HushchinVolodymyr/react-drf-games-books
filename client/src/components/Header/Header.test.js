// Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Make sure to import this

import Header from './Header';

test('renders header component with correct title and navigation links', () => {
  render(<Header />);

  const titleElement = screen.getByText(/Портал ігор та книг/i);
  expect(titleElement).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /Головна/i });
  expect(homeLink).toBeInTheDocument();

  const gamesLink = screen.getByRole('link', { name: /Ігри/i });
  expect(gamesLink).toBeInTheDocument();

  const booksLink = screen.getByRole('link', { name: /Книги/i });
  expect(booksLink).toBeInTheDocument();
});

test('navigation links have correct href attributes', () => {
  render(<Header />);

  const homeLink = screen.getByRole('link', { name: /Головна/i });
  expect(homeLink).toHaveAttribute('href', '/');

  const gamesLink = screen.getByRole('link', { name: /Ігри/i });
  expect(gamesLink).toHaveAttribute('href', '/games');

  const booksLink = screen.getByRole('link', { name: /Книги/i });
  expect(booksLink).toHaveAttribute('href', '/books');
});
