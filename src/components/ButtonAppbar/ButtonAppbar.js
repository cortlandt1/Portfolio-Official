import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import './ButtonAppbar.css'


const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "transparent",
    boxShadow: 'none',
    width: "100%",
    borderBottom: '.5px solid black',
    height: "50px",
  },
  cortland: {
    display:"inline-flex",
    justifyContent: "left",
    color: "black",
    fontWeight: 800,
    fontSize: "25px",
    height: "50px",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="black" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Grid container spacing={24} className={classes.cortland}>
            <Grid item md={6} >
                <Typography variant="h6" color="inherit" className={classes.cortland}>
                  Cortland Taylor
                </Typography>
            </Grid>
            <Grid item md={6} className="links">
              <button className="AppBarLinks">
                My Work
              </button>
              <button className="AppBarLinks">
                Github
              </button>
              <button className="AppBarLinks">
                Contact
              </button>
            </Grid>
          </Grid>
        </Toolbar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
