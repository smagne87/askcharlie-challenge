import { App, StatelessApp } from './components/App';
import { dispatcher } from './middleware/dispatcher';
import reducers from './reducers';

export default {
  App,
  dispatcher,
  StatelessApp,
  reducers,
};
