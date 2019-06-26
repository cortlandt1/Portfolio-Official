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
import './TypingMation.css'
import Appbar from '../Appbar'



const styles = {
  root: {
    flexGrow: 1,
  }
};

function TypingMation(props) {
  const { classes } = props;
  return (
    <>
        <div className='typewriter'>
            <h1>
               Hi, I'm Cortland.
               <br/>
               I am a Web Developer.
            </h1>
            
        </div>
    </>
  );
}

TypingMation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypingMation);
