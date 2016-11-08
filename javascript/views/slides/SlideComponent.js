import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import css from './slideComponent.scss';

const propTypes = {
  data: PropTypes.object,
  style: PropTypes.object
};

const SlidesComponent = ({ data: { title, content, points = [] }, style }) => (
  <div styleName="slide" style={style}>
    <div className="title is-1">{title}</div>
    <div className="subtitle is-5">
      {content}
    </div>
    {
      points.length > 0 &&
      <ul>
        {
          points.map((point, index) => (
            <li key={index}>{point}</li>
          ))
        }
      </ul>
    }
  </div>
);

SlidesComponent.propTypes = propTypes;
export default CSSModules(SlidesComponent, css);
