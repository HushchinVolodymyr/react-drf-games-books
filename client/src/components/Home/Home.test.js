// Home.test.js

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  it('рендерит компонент', () => {
    render(<Home />);
    expect(screen.getByText('Вітаємо на головній сторінці!')).toBeInTheDocument();
  });
});
