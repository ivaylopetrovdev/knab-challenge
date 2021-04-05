import React from 'react';
import {
  cleanup, render, screen, fireEvent,
} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import GET_CURRENCY_RATES from '../../gql/queries/currencyRates';
import App from './index';

const mocks = [
  {
    request: {
      query: GET_CURRENCY_RATES,
      variables: { code: 'bgn' },
    },
    result: {
      data: {},
    },
  },
  {
    request: {
      query: GET_CURRENCY_RATES,
      variables: { code: 'aud' },
    },
    error: new Error('Something went wrong'),
  },
];

describe('Test suits for App', () => {
  afterEach(cleanup);

  test('should renders', () => {
    render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MockedProvider>,
    );
  });

  test('should trigger theme switch', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MockedProvider>,
    );
    await fireEvent.click(screen.getByRole('checkbox'));

    await expect(screen.getByRole('checkbox')).toBeTruthy();

    await fireEvent.click(screen.getByRole('checkbox'));
  });
});
