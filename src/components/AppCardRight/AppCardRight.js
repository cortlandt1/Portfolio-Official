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
import '../AppCardRight/AppCardRight.css'
import CodePen from '../CodePen/CodePen.js'


const styles = {
  root: {
    flexGrow: 1,
  },
  grid: {
  }
};

function AppCardRight(props) {
  const { classes } = props;
  return (
    <>
        <div className='contain1'>
            <div className='app-info1'>
              <div className="header1">
                <h2>
                  {props.title}
                </h2>
              </div>  
                  <ul>
                    <li>
                      {props.point1}
                    </li>
                    <li>
                      {props.point2}
                    </li>
                  </ul>
            </div>
            <div className='app1'>           
              <CodePen hash={props.hash} user={props.name}></CodePen>
            </div>            
        </div>
    </>
  );
}

AppCardRight.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (AppCardRight);


//"dBwZNW"
//cortlandt1