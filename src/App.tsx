import store from './redux/store';
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login }  from "./pages/Login/";
import { Feed } from './pages/Feed';

import './styles/global.scss'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/feed" exact component={Feed} />
        </Switch>
      </Router>
    </Provider>
  );
}
