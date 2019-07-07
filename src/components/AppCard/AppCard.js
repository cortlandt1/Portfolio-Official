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
import './AppCard.css'
import CodePen from '../CodePen/CodePen.js'


const styles = {
  root: {
    flexGrow: 1,
  },
  grid: {
  }
};

function AppCard(props) {
  const { classes } = props;
  return (
    <>
        <div className='contain'>
            <div className='app'>
              {/* <p class="codepen" data-height="265" data-theme-id="0"
              data-default-tab="js,result" data-user="cortlandt1" data-slug-hash="pXVLMq" data-preview="true"
              style={{height: "265px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em"}} data-pen-title="pXVLMq">
              <span>See the Pen <a href="https://codepen.io/cortlandt1/pen/pXVLMq/">
              pXVLMq</a> by cortlandt1 (<a href="https://codepen.io/cortlandt1">@cortlandt1</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
              </p>
              <script async src="https://static.codepen.io/assets/embed/ei.js"></script> */}
              <CodePen></CodePen>
              <div>
                <button className='preview'>
                    Preview
                </button>
              </div> 
              <div> 
                <button className='code'>
                    View Code
                </button>
              </div>  
            </div>
            <div className='app-info'>
              <div className="header">
                <h2>
                  Header
                </h2>
              </div>  
                  <ul>
                    <li>
                      point 1
                    </li>
                    <li>
                      point 2
                    </li>
                  </ul>
            </div>
        </div>
    </>
  );
}

AppCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (AppCard);
