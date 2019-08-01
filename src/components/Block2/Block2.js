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
import AppCardLeft from '../AppCardLeft'
import './Block2.css'
import AppCardRight from '../AppCardRight';


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
         <p className='head'>My 
         <span className="workHover"> Work </span> 
         Thus Far</p>
    </div>   
      <AppCardLeft hash='pXVLMq' name="cortlandt1" title="Hangman Game" point1="Built entirely using vanilla Javascript" point2=""></AppCardLeft>
      <AppCardRight hash='dBwZNW' name="cortlandt1" title="Train Scheduler"></AppCardRight>
      <AppCardLeft hash="wLNXPg" name="cortlandt1" title="Trivia Game" className="app3"></AppCardLeft>
    </div>
    </>
  );
}

Block2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (Block2);
