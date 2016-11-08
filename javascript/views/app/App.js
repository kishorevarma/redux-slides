import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import css from './styles/app.scss';

const propTypes = {
  children: PropTypes.any
};

const App = (props) => (
  <div styleName="mainView">
    {props.children}
  </div>
);

App.propTypes = propTypes;

export default CSSModules(App, css);
