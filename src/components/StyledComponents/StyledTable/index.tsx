import { withStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';

export default withStyles((theme) => ({
  root: {
    display: 'block',
    border: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'table',
      border: 'none',
      paddingTop: '70px',
    },
  },
}))(Table);
