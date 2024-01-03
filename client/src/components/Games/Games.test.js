// Games.test.js

import '@testing-library/jest-dom/';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Games from './Games';

describe('Games Component', () => {
  it('рендерит компонент', () => {
    render(<Games />);
    expect(screen.getByText('Ігри')).toBeInTheDocument();
  });
});
