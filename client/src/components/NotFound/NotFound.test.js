// NotFound.test.js

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound Component', () => {
  it('рендерит компонент', () => {
    render(<NotFound />);
    expect(screen.getByText('Страница не найдена')).toBeInTheDocument();
  });
});
