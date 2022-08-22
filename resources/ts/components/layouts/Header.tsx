import React from "react";
import {
  Link
} from "react-router-dom";

import { AppBar, Toolbar, makeStyles, Typography, Button } from "@material-ui/core";

export const Header = () => {

  const useStyle = makeStyles(() => ({
    headerTitle: {
      color: "white",
    },
    header: {
      display: "flex",
    },
  }));

  const classes = useStyle();

  return (<>
    <div className={classes.header}>
      <AppBar>
        <Toolbar>
          <Typography className={classes.headerTitle}>Fortnite Tracker</Typography>
          <div style={{ flexGrow: 1 }}></div>
          <div>
            <Link to="/" className="">
              <Button className={classes.headerTitle}>Home</Button>
            </Link>
            <Link to="/login" className="">
              <Button className={classes.headerTitle}>Login</Button>
            </Link>
            
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  </>);
};
