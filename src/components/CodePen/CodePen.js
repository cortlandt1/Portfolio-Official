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

const CodepenEmbedded = () => {
  return <Codepen hash="pXVLMq" user="cortlandt1" />;
};

CodepenEmbedded.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (CodepenEmbedded);
