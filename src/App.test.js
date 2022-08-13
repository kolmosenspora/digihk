import { render, screen } from '@testing-library/react';
import TallennaTuote from './TallennaTuote';

test('renders learn react link', () => {
  render(<TallennaTuote />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
