import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { TOP_DRAWER_MENU, BOTTOM_DRAWER_MENU, MENU } from 'src/components/material-ui/icons';

const theme = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const drawerLink = text => {
  if (text.toLowerCase() === 'home') {
    return '/';
  } else {
    return text.toLowerCase().replace(' ', '-');
  }
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles(theme);
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => {
    if (
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      style={{
        background: 'transparent'
      }}
    >
      <List>
        {TOP_DRAWER_MENU.map((obj, index) => (
          <Link href={obj.pathname} key={index}>
            <ListItem button>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {BOTTOM_DRAWER_MENU.map((obj, index) => (
          <Link href={obj.pathname} key={index}>
            <ListItem button>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>{MENU}</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}