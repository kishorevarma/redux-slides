import AppContainer from './views/app/App';
import SlidesContainer from './views/slides/SlidesContainer';

const createRoutes = () => ({
  path: '/',
  component: AppContainer,
  indexRoute: {
    component: SlidesContainer
  }
});

export default createRoutes;
