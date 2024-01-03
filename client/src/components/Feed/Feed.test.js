// Feed.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Feed from './Feed';

describe('Feed component', () => {
  const mockAxios = new MockAdapter(axios);


  const mockData = [
    { id: 1, image: 'path/to/image1.jpg', title: 'Заголовок 1', content: 'Описание 1' },
    { id: 2, image: 'path/to/image2.jpg', title: 'Заголовок 2', content: 'Описание 2' },
  ];

  test('renders Feed component with correct data', async () => {
    mockAxios.onGet('http://localhost:8000/api/posts/testType').reply(200, mockData);

    render(<Feed type="testType" />);

    await waitFor(() => expect(mockAxios.history.get.length).toBe(1));

    const card1 = screen.getByText(/Заголовок 1/i);
    const card2 = screen.getByText(/Заголовок 2/i);

    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
  });
});

