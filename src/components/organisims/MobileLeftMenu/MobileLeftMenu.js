import React, { useContext } from "react";
import clsx from "clsx";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HandleLeftDrawer } from "../../../contexts/HandleLeftDrawer/HandleLeftDrawer";
import AnimalsListMenu from "../../pages/Animals/AnimalsListMenu";
import FarmListMenu from "../../pages/Farm/FarmListMenu";
import AppLoginLogo from "../AppLoginLogo/AppLoginLogo";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
   
   
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    backgroundColor:'#2e7d32'
  },

  drawerHeader2: {
  
    backgroundColor:'#2e7d32'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
function MobileLeftMenu() {
  const classes = useStyles();
  const theme = useTheme()
  const { handleDrawerOpen,handleDrawerClose,open} =useContext(HandleLeftDrawer)
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
       
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon style={{fontSize:45,color:'white'}} />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>

      <div className={classes.drawerHeader2}>

      <AppLoginLogo textAlign="center" name=""></AppLoginLogo>
      </div>

      <Divider />
     <div style={{padding:10}}>

     {/* <AnimalsListMenu handleDrawerClose={handleDrawerClose}></AnimalsListMenu>
     <FarmListMenu handleDrawerClose={handleDrawerClose}></FarmListMenu>
     */}
     </div>

    </Drawer>
  );
}

export default MobileLeftMenu;
