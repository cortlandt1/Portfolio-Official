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
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './IntroCard.css'




const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#0e628c",
  },
  cortland: {
    display:"flex",
    justifyContent: "center",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  grid: {
    spacing: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center'
  }
};

function IntroCard(props) {
  const { classes } = props;
  return (
    <>
    
    <div className="container">
      
      <Grid className="container" container spacing={24}>
          <Grid className={classes.grid} item md={12} sm={12} xs={12} >
            <h1 className='heading'>Hi, I'm Cortland.</h1>
            {/* <TypingMation></TypingMation> */}
          </Grid>  
          <Grid className={classes.grid} item md={12} sm={12} xs={6}>
            <p className="paragraph">I am an aspiring full stack web developer</p>
          </Grid>
      </Grid>
      </div>
    </>
  );
}

IntroCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntroCard);
