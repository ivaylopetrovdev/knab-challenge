import React from 'react';
import moment from 'moment';
import {
  Grid, Paper, TableContainer, TableHead,
} from '@material-ui/core';

import StyledTable from '../StyledComponents/StyledTable';
import StyledTableBody from '../StyledComponents/StyledTableBody';
import StyledTableRow from '../StyledComponents/StyledTableRow';
import StyledTableCell from '../StyledComponents/StyledTableCell';

import toCurrency from '../../utils/formaters';

/**
 * @description RatesTable component visualise the table list of all desired rates by showing:
 * - update time - time when the latest data was updated
 * - code of the (crypto)currency - the one that is used in the API call
 * - currency's name - name of the desired currency
 * - currency's value - value of the currency
 */
export default function RatesTable({ rates: renderData }: any): JSX.Element {
  return (
    <Grid item xs={12} className="results-wrapper">
      <div className="results-base">
        Latest rates for:
        <span>
          { `1 ${renderData.base}` }
        </span>
      </div>
      <TableContainer component={Paper}>
        <StyledTable aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell style={{ width: 200 }}>Name</StyledTableCell>
              <StyledTableCell>Rate</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <StyledTableBody>
            {
              renderData.rates && renderData.rates.map((row: any) => {
                const currencyName = Object.keys(row)[0];
                const currencyValue = Object.values(row)[0];
                return (
                  <StyledTableRow key={currencyName}>
                    <StyledTableCell>
                      <strong>{currencyName}</strong>
                    </StyledTableCell>
                    <StyledTableCell>{toCurrency(currencyName, currencyValue)}</StyledTableCell>
                  </StyledTableRow>
                );
              })
            }
          </StyledTableBody>
        </StyledTable>
      </TableContainer>
      <div className="results-date">
        Latest Update at:
        <span>
          {moment.unix(renderData.timestamp).format('DD MMM YYYY, HH:MM:ss')}
        </span>
      </div>
    </Grid>
  );
}
