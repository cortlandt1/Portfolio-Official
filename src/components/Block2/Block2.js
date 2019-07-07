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
import MyWork from '../MyWork'
import AppCard from '../AppCard'
import './Block2.css'


const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#0e628c",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  grid: {
  }
};

function Block2(props) {
  const { classes } = props;
  return (
    <>
    <div className='test'>
    <div className='capsule'>
       <p className='head'>My Work Thus Far</p>
    </div>   
            {/* <MyWork className='myWork'></MyWork> */}
            <AppCard></AppCard>
          </div>

      {/* <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className='test'>
            <p className='heading'>
              My Work Thus <span style={{color: '#0371d3' }}>Far</span>
            </p>
          </div>
        </Grid>
      </Grid> */}
    </>
  );
}

Block2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (Block2);
