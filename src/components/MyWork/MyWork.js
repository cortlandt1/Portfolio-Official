import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IntroCard from '../IntroCard'
import './MyWork.css'


const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#0e628c",
  },
};

function MyWork(props) {
  const { classes } = props;
  return (
    <>
        <div className='container'>    
            <Grid container justify="center" direction="column"   alignItems="center" spacing={12}>
                <Grid item lg={4} sm={12} xs={12}>
                  <div className='block'>HI</div>
                </Grid>
                <Grid item lg={4} sm={12} xs={12}>
                  <div className='block'>HI</div>
                </Grid>
            </Grid>
            
        </div>    
    </>
  );
}

MyWork.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (MyWork);
