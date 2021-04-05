import { gql } from '@apollo/client';

/**
 * @description GraphQL query for receiving all currencies rates for the selected cryptocurrency code
 * Benefit of this approach is that the UI is receiving ONLY desired data
 */
export default gql`
  query GetCurrencyRates($code: String!) {
    currencyRates(code: $code)
    @rest(path: "/latest?base={args.code}&symbols=USD,EUR,BRL,GBP,AUD&access_key=55da4d58c8338e2c24b5fbe937daf272") {
      timestamp,
      base,
      rates {
        USD,
        EUR,
        BRL,
        GBP,
        AUD
      }
    }
  }
`;
