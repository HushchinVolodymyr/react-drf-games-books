import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import CardItem from './CardItem';

// Имитация axios
jest.mock('axios');

const mockedData = {
  data: [
    {
      id: 1,
      title: 'Test Item',
      image: '/test-image.jpg',
      content: 'Lorem ipsum dolor sit amet',
    },
  ],
  status: 200,
};

describe('CardItem Component', () => {
  it('renders loading message initially', () => {
    render(
      <MemoryRouter initialEntries={['/post/1']}>
        <Routes>  {/* Wrap routes in a Routes component */}
          <Route path="/post/:value" element={<CardItem />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders item details on successful data fetch', async () => {
    axios.get.mockResolvedValueOnce(mockedData);

    render(
      <MemoryRouter initialEntries={['/post/1']}>
        <Routes>
          <Route path="/post/:value" element={<CardItem />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Item')).toBeInTheDocument();
      expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
    });
  });
});
