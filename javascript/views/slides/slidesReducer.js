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
    title: 'REACT',
    content: 'Just A View Library',
    points: [
      'Virtual Dom Diff',
      'JSX and Babel Transpiling',
      'React Hot Loading',
      'Bigger Community'
    ],
    color: '#3273dc'
  }, {
    title: 'REDUX',
    content: 'State Management',
    points: [
      'Flux implementation (One Way Binding)',
      'Well managed react re renders',
      'MiddleWares',
      'Simple and Small',
      'Easy To Debug',
      'Dev Tools',
      'https://github.com/kishorevarma/redux-slides'
    ],
    color: '#23d160'
  }, {
    title: 'WEBPACK',
    content: 'Build Tool',
    points: [
      'its every thing',
      'babel transpiling',
      'hot loading',
      'uglify && sourcemaps',
      'loaders and plugins',
      'sass compile',
      'dead code elimination'
    ],
    color: '#ff470f'
  }, {
    title: 'CSS MODULES',
    content: 'No need to worry about class names clashing',
    background: '#ff3860'
  }, {
    title: 'REACT SPRING',
    content: 'An Animation Library for React',
    background: '#00d1b2'
  }, {
    title: 'OTHER LIBRARIES',
    content: 'IMO they are cool',
    background: '#ff470f',
    points: [
      'Bulma CSS Flex library(No JS)',
      'D3',
      'react-faux-dom',
      'react-css-modules',
      'redux-promise-middleware',
      'type-to-reducer',
      'enzyme',
      'nyc',
      'webpack-bundle-analyzer'
    ],
    color: '#4D7E65'
  }, {
    title: 'EXPLORING',
    points: [
      'GraphQL',
      'Relay',
      'Apollo',
      'Ava'
    ],
    color: '#B5533C'
  }, {
    title: 'THANK YOU',
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
