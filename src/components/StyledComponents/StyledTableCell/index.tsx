import { withStyles } from '@material-ui/core/styles';
import { TableCell } from '@material-ui/core';

export default withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 'bold',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  body: {
    fontSize: 14,

    '&::before': {
      /* Now like a table header */
      position: 'absolute',
      top: 4,
      left: 12,
      width: '30%',
      paddingRight: '10px',
      whiteSpace: 'nowrap',
      lineHeight: '20px',
      fontWeight: 'bold',
    },

    /*
    Label the data
    */
    '&:nth-of-type(1):before': { content: '"Name"' },
    '&:nth-of-type(2):before': { content: '"Rate"' },

    [theme.breakpoints.up('sm')]: {
      '&::before': {
        display: 'none',
      },
    },
  },
  root: {
    padding: '4px 12px',
    textAlign: 'left',
    border: 'none',
    display: 'block',
    borderBottom: '1px solid #eee',
    position: 'relative',
    paddingLeft: '30%',

    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      border: `1px solid ${theme.palette.action.hover}`,
      padding: '4px 12px',
    },
  },
}))(TableCell);
