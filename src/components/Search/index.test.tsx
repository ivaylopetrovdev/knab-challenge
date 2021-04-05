import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './index';

describe('Test suits for Search', () => {
  test('should render search elements', async () => {
    render(
      <Search searchValue="" onChange={() => {}} onClick={() => {}} />,
    );

    expect(await screen.getByRole('textbox')).toBeInTheDocument();
    expect(await screen.getByRole('button')).toBeInTheDocument();
  });

  test('should calls onClick prop when clicked', async () => {
    const handleClick = jest.fn();
    render(
      <Search searchValue="" onChange={() => {}} onClick={handleClick} />,
    );
    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should calls onChange prop when changed', async () => {
    const handleChange = jest.fn();
    render(
      <Search searchValue="" onChange={handleChange} onClick={() => {}} />,
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'btc' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
