import { combineReducers } from 'redux';
import slidesReducer from './views/slides/slidesReducer';

const reducer = combineReducers({
  slides: slidesReducer
});

export default reducer;
