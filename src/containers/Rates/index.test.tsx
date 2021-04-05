import React from 'react';
import {
  render, screen, act, cleanup, waitFor, fireEvent,
} from '@testing-library/react';

import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import GET_CURRENCY_RATES from '../../gql/queries/currencyRates';
import Rates from './index';

const mocks = [
  {
    request: {
      query: GET_CURRENCY_RATES,
      variables: {
        code: '',
      },
    },
    result: {
      data: {
        currencyRates: {
          timestamp: 1617567867314,
          base: 'bgn',
          rates: {
            USD: 1.000,
            EUR: 1.000,
            BRL: 1.000,
            GBP: 1.000,
            AUD: 1.000,
          },
        },
      },
    },
  },
  {
    request: {
      query: GET_CURRENCY_RATES,
    },
    error: new Error('Something went wrong'),
  },
];

describe('Test suits for Rates', () => {
  afterEach(cleanup);

  test('should render with loading state', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <Rates />
        </BrowserRouter>
      </MockedProvider>,
    );

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  test('should render with final state', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <Rates />
        </BrowserRouter>
      </MockedProvider>,
    );

    await waitFor(() => {
      fireEvent.change(screen.getByRole('textbox'), { target: { value: 'bgn' } });
    });

    fireEvent.click(screen.getByRole('button'));

    // wait for content
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    // take a snapshot of the rendered content (error or data)
    expect(await screen.getByRole('table')).toBeInTheDocument();

    expect(screen.getAllByRole('cell')).toHaveLength(10);
    expect(screen.getAllByRole('columnheader')).toHaveLength(2);
  });
});
