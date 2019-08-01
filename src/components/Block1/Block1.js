import React from 'react';
import { render } from "react-dom";
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
import Blur from 'react-css-blur'
import { Parallax, Background } from 'react-parallax';
import './effects.js'
import $ from 'jquery';


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

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 = "https://gypsyguide.com/wp-content/uploads/2017/09/Yosemite-National-Park.jpg"
 

class Block1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {blurOn: false};

    // This binding is necessary to make `this` work in the callback
    this.myFunction = this.myFunction.bind(this);
  }


   myFunction() {
      
    }

     myFunction() {
      if (window.scrollTop > 10 || document.documentElement.scrollTop > 50) {
        this.setState(state => ({
          blurOn: true
        })
      );
      alert('hello')
      } 
    }

  render () {
  return (
    <>
    <div>
        {/* <img class="image" style={{backgroundImage: 'url(./img/city.jpg)'}} /> */}
        <Blur radius={ this.state.blurOn ? '5px' : '0' } transition="400ms">
        <section className='background' onScroll={this.myFunction()}>
           <div className="blurred-image-container">
            <div className="img-src"></div>
            <div className="img-src blurred-image"></div>
          </div>         
        <ButtonAppBar></ButtonAppBar>      
          <Grid container spacing={12} className='container'>
            <Grid item md={12} className='wrapper' >
                {/* <IntroCard className={classes.card}></IntroCard>  */}
                <h1 className='intro'>
          
                Hi, I'm 
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
              <a href='https://github.com/cortlandt1'  target="_blank">
                <button color='primary' className='gitButton'>Github</button>
              </a>  
              <button color='primary' className='contactButton'>Contact</button>
            </Grid>
          </Grid>
        </section>    
        </Blur>
          <Grid container spacing={24}>
            <Grid item md={12}>
              <a id="block2"></a>
              <Block2 ></Block2>
            </Grid>
          </Grid>  
      </div>    
    </>
  );
}
}

Block1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Block1);


$(document).ready(function() {
  $(window).scroll(function(e) {
      var s = $(window).scrollTop(),
          opacityVal = (s / 200);

      $('.blurred-image').css('opacity', opacityVal);

  });
});