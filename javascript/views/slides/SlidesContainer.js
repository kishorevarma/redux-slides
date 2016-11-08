import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import SlideComponent from './SlideComponent';
import * as actions from './slidesActions';
import css from './slideComponent.scss';

const springSettings = { stiffness: 170, damping: 26 };
const width = 960;
const propTypes = {
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
  slides: PropTypes.array,
  style: PropTypes.object,
  currentSlideIndex: PropTypes.number
};

const mapStateToProps = (state) => ({
  currentSlideIndex: state.slides.currentSlideIndex,
  slides: state.slides.data
});

class SlidesContainer extends Component {
  componentDidMount() {
    const { nextSlide, prevSlide } = this.props;
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 39) {
        nextSlide();
      }
      if (e.keyCode === 37) {
        prevSlide();
      }
    });
  }

  render() {
    const { slides, currentSlideIndex } = this.props;
    const firstSlideLeftCord = -(currentSlideIndex * width);
    const configs = [];
    slides.reduce((prevLeft) => {
      configs.push({
        left: spring(prevLeft, springSettings)
      });
      return prevLeft + width;
    }, firstSlideLeftCord);

    return (
      <div className={`is-fullwidth ${css.slides}`}>
        {
          configs.map((styles, index) => (
            <Motion key={index} style={styles}>
              {
                style => <SlideComponent key={index} data={slides[index]} style={style} />
              }
            </Motion>
          ))
        }
      </div>
    );
  }
}
SlidesContainer.propTypes = propTypes;
export default connect(mapStateToProps, actions)(SlidesContainer);
