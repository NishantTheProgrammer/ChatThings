
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Home from './containers/Home/Home';

import classes from './App.module.css'


function App() {
  return (
    <div className={classes.app}>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={["/login", "/signup", "/logout"]} exact component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
