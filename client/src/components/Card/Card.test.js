// Card.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Make sure to import this

import Card from './Card';

const mockCardData = {
  id: 1,
  image: '/path/to/image.jpg',
  title: 'Test Card Title',
  description: 'Test Card Description',
};

test('renders Card component with correct data', () => {
  render(<Card {...mockCardData} />);

  const titleElement = screen.getByText(/Test Card Title/i);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(/Test Card Description/i);
  expect(descriptionElement).toBeInTheDocument();

  const imageElement = screen.getByAltText('Test Card Title');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'http://localhost:8000/path/to/image.jpg');
});

test('renders Card component with correct link', () => {
  render(<Card {...mockCardData} />);

  const linkElement = screen.getByRole('link', { name: /Test Card Title/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/post/1');
});
