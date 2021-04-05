import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

describe('Test suits for Header', () => {
  test('should renders', async () => {
    render(
      <BrowserRouter>
        <Header handleModeFn={() => {}} />
      </BrowserRouter>,
    );

    await expect(screen.getByText('Cryptocurrency Rates')).toBeInTheDocument();
    await expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('should switch the theme', async () => {
    render(
      <BrowserRouter>
        <Header handleModeFn={() => {}} />
      </BrowserRouter>,
    );
    await fireEvent.click(screen.getByRole('checkbox'));

    await expect(screen.getByRole('checkbox')).toBeTruthy();
  });
});
