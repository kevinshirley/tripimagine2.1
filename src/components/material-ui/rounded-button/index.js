import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function ButtonSizes(props) {
  const { text } = props;

  return (
    <Fab variant="extended" color="primary" aria-label="add" id="rounded-button">
      {text}
      <KeyboardArrowRightIcon />
    </Fab>
  );
}