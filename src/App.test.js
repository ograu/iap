import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the form', () => {
    render(<App />);

    const firstNumberLabel = screen.getByLabelText(/first number:/i);
    const secondNumberLabel = screen.getByLabelText(/second number:/i);

    expect(firstNumberLabel).toBeInTheDocument();
    expect(secondNumberLabel).toBeInTheDocument();
  });
});
