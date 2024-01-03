import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Books from './Books';

describe('Books Component', () => {
  it('рендерит компонент', () => {
    render(<Books />);
    expect(screen.getByText('Книги')).toBeInTheDocument();
  });
});
