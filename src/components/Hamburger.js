import * as React from 'react';
import Box from '@mui/material/Box';
import clsx from "clsx";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@material-ui/core/styles";
import categories from '../data/category';
import './Hamburger.css'
const useStyles = makeStyles({
  list: {
    width: 200, 
    paddingLeft: 10,
    paddingRight: 5, 
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer({setcategory}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
   
    left: false,
   
  });
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box className={clsx(classes.list)}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='categoryList'>
       <ListItem> Categories </ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem style={{height:40 ,borderRadius:3}}
          button 
          key={text} 
          onClick={() => setcategory(text)}
          >
           
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
     
      
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}><MenuIcon /> </Button>
          <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
      }
    </div>
  );
}
