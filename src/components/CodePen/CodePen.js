import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Codepen from "react-codepen-embed";

const styles = {
  root: {
    flexGrow: 1,
  },
  grid: {
  }
};

const CodepenEmbedded = (props) => {
  return <Codepen hash={props.hash} user={props.user} />;
};

CodepenEmbedded.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (CodepenEmbedded);

//"pXVLMq"
//cortlandt1