import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders Support title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Support/i);
  expect(linkElement).toBeInTheDocument();
});
