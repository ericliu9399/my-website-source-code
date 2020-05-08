import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    marginLeft: 5,
    padding: 0,
    boxShadow: '0 3px 5px 2px rgba(255,255,255,0.3)',//rgba(255, 105, 135, .3)
    width: "fit-content",
    height: "fit-content",
  },
  label: {
    padding: 0,
    margin: 0,
    width: "fit-content",
    height: "fit-content",
  },
});



export default function MuiBtn({ children, variant = "contained", color = "primary" }) {
  const classes = useStyles();
  return (
    <Button
      variant={variant}
      color={color}
      classes={{
        root: classes.root,
        label: classes.label
      }}
    >
      {children}
    </Button>
  );
}