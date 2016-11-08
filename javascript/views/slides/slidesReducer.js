import typeToReducer from 'type-to-reducer';
import { nextSlide, prevSlide } from './slidesActions';

/* eslint no-param-reassign: 0 */
const adjustSlideIndex = (slideIndex, slides) => {
  const slideCount = slides.length;
  slideIndex = slideIndex >= 0 ? slideIndex : slideCount - 1;
  slideIndex = slideIndex >= slideCount ? 0 : slideIndex;
  return slideIndex;
};

const initialState = {
  data: [{
    title: 'Data Engine',
    content: 'UI Tech'
  }, {
    title: 'React',
    content: 'Just A View Library',
    points: [
      'Virtual Dom Diff',
      'JSX and Babel Transpiling',
      'React Hot Loading',
      'Bigger Community'
    ]
  }, {
    title: 'Redux',
    content: 'State Management',
    points: [
      'Flux implementation (One Way Binding)',
      'Well managed react re renders',
      'MiddleWares',
      'Simple and Small',
      'Easy To Debug',
      'Dev Tools'
    ]
  }, {
    title: 'Webpack',
    content: 'Build Tool',
    points: [
      'its every thing',
      'babel transpiling',
      'hot loading',
      'uglify && sourcemaps',
      'loaders and plugins',
      'sass compile',
      'dead code elimination'
    ]
  }, {
    title: 'CSS Modules',
    content: 'No need to worry about class names clashing'
  }, {
    title: 'React Spring',
    content: 'An Animation Library for React'
  }, {
    title: 'Some More Cool Libraries We are using',
    content: 'IMO they are cool',
    points: [
      'Bulma CSS Flex library(No JS)',
      'D3',
      'react-faux-dom',
      'react-css-modules',
      'redux-promise-middleware',
      'type-to-reducer',
      'enzyme',
      'nyc'
    ]
  }, {
    title: 'Exploring',
    points: [
      'GraphQL',
      'Relay',
      'Apollo',
      'Ava'
    ]
  }, {
    title: 'Thank you',
    content: '????'
  }],
  currentSlideIndex: 0
};

export default typeToReducer({
  [nextSlide]: (state) => {
    const { data, currentSlideIndex } = state;
    return {
      ...state,
      currentSlideIndex: adjustSlideIndex(currentSlideIndex + 1, data)
    };
  },
  [prevSlide]: (state) => {
    const { data, currentSlideIndex } = state;
    return {
      ...state,
      currentSlideIndex: adjustSlideIndex(currentSlideIndex - 1, data)
    };
  }
}, initialState);
