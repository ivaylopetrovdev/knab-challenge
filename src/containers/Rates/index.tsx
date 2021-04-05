import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import GET_CURRENCY_RATES from '../../gql/queries/currencyRates';
import { CurrencyRatesData, QueryVars } from '../../utils/interfaces/interfaces';
import RatesTable from '../../components/RatesTable';
import Page from '../../components/Page';
import Search from '../../components/Search';
import useDebounce from '../../utils/debounce';

import './Rates.css';

/**
 * @description Rates container contains:
 * - GraphQL call for getting all rates for desired (crypto)currency code
 * - Visualizing the results in a table list
 */
export default function Rates(): JSX.Element {
  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchText = useDebounce(searchText, 200);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchText(e.target.value);

  const [getRates, { loading, data, error }] = useLazyQuery<CurrencyRatesData, QueryVars>(
    GET_CURRENCY_RATES,
    { fetchPolicy: 'network-only' },
  );

  const dataToRender = data && {
    ...data.currencyRates,
    rates: data.currencyRates.rates && Object.entries(data.currencyRates.rates).map(([k, v]: any) => ({ [k]: v })),
  };

  return (
    <>
      <div className="search-wrapper">
        <Search
          searchValue={searchText}
          onChange={(e) => handleInput(e)}
          onClick={() => getRates({
            variables: {
              code: debouncedSearchText.toUpperCase(),
            },
          })}
        />
      </div>
      <div className="page-wrapper">
        <Page loading={loading} noData={data ? !data.currencyRates.rates : false} errorParam={error}>
          {dataToRender && (<RatesTable rates={dataToRender} />)}
        </Page>
      </div>
    </>
  );
}
