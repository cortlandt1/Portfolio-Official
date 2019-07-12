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
import './Block1.css'
import Block2 from '../Block2'
import MyWork from '../MyWork'
import AppCardLeft from '../AppCardLeft'
import AppCardRight from '../AppCardRight';
import ButtonAppBar from '../ButtonAppbar/ButtonAppbar'
import './effects'
// import Title from '../Title'

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
};

function Block1(props) {
  const { classes } = props;
  return (
    <>
        {/* <img class="image" style={{backgroundImage: 'url(./img/city.jpg)'}} /> */}
        <section className='background'>
        <ButtonAppBar></ButtonAppBar>
          <Grid container spacing={12} className='container'>
            <Grid item md={12} className='wrapper' >
                {/* <IntroCard className={classes.card}></IntroCard>  */}
                <h1 className='intro'>
                Hello, I'm 
                  <span className='nameHover'> Cortland.</span>
                <br/>
                <span>I'm a full stack web developer.</span>
                </h1>
                {/* <Title></Title> */}
            </Grid>
            <Grid item md={12} className='button-container'>
            <a href='#block2'>
              <button color='primary' className='workButton'>My Work</button>
              </a>  
              <button color='primary' className='gitButton'>Github</button>
              <button color='primary' className='contactButton'>Contact</button>
            </Grid>
          </Grid>
        </section>
          <Grid container spacing={24}>
            <Grid item md={12}>
              <a id="block2"></a>
              <Block2 ></Block2>
            </Grid>
          </Grid>  
    </>
  );
}

Block1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Block1);
