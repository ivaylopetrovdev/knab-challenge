import React from 'react';
import {
  AppBar, FormControlLabel, Switch, Toolbar, Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

/**
 * @description custom Material-UI styles
 */
const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

/**
 * @description TS's props for component's received props
 */
type HeaderProps = {
  handleModeFn: () => void;
};

/**
 * @description Header component contains:
 * - Dark mode toggle button
 * - Site's name
 */
export default function Header({ handleModeFn }: HeaderProps): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className="wrapper">
        <div className="row">
          <FormControlLabel
            control={<Switch onClick={() => handleModeFn()} />}
            label="Dark Mode"
          />
          <Typography className={classes.title} variant="h6" noWrap>
            Cryptocurrency Rates
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
