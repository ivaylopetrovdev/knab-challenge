import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

type SearchProps = {
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

export default function Search({ searchValue, onChange, onClick: triggerSearch }: SearchProps): JSX.Element {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Enter crypto code..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => onChange(e)}
        value={searchValue}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          return triggerSearch();
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
