import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import RatesTable from './index';

const mockedRates = {
  timestamp: 1617534787,
  base: 'BTC',
  rates: [
    { USD: 57691.8555 },
    { EUR: 49060.620885 },
    { BRL: 329307.475296 },
    { GBP: 41715.007593 },
    { AUD: 75800.629987 },
  ],
};

describe('Test suits for RatesTable', () => {
  test('should render table elements', async () => {
    render(
      <RatesTable rates={[]} />,
    );

    expect(await screen.getByRole('table')).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
    expect(await screen.getByRole('columnheader', { name: 'Rate' })).toBeInTheDocument();
    expect(screen.getAllByRole('columnheader')).toHaveLength(2);
  });

  test('should render table content (1 season)', async () => {
    render(
      <BrowserRouter>
        <RatesTable rates={mockedRates} />
      </BrowserRouter>,
    );

    expect(await screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('cell')).toHaveLength(10);
    expect(screen.getAllByRole('columnheader')).toHaveLength(2);
  });
});
