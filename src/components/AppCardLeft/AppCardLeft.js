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
import '../AppCardLeft/AppCardLeft.css'
import CodePen from '../CodePen/CodePen.js'


const styles = {
  root: {
    flexGrow: 1,
  },
  grid: {
  }
};

function AppCardLeft(props) {
  const { classes } = props;
  return (
    <>
        <div className='contain'>
            <div className='app'>           
              <CodePen hash={props.hash} user={props.name}></CodePen>
            </div>            
            <div className='app-info'>
              <div className="header">
                <h2>
                  {props.title}
                </h2>
              </div>  
                  <ul>
                    <li>
                      {props.point1}
                    </li>
                    <p></p>
                    <li>
                      {props.point2}
                    </li>
                    <p></p>
                    <li>
                      {props.point3}
                    </li>
                  </ul>
            </div>
        </div>
    </>
  );
}

AppCardLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (AppCardLeft);


