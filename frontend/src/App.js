
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Home from './containers/Home/Home';
import Chat from './containers/Chat/Chat';
import Story from './containers/Story/Story';
import Friends from './containers/Friends/Friends';
import Games from './containers/Games/Games';

import classes from './App.module.css'
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className={classes.app}>
      <Switch>
        <Route path={["/login", "/signup", "/logout"]} exact component={Auth} />
        <Route path="/"  component={NavBar} />
      </Switch>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/story" component={Story} />
        <Route path="/friends" component={Friends} />
        <Route path="/games" component={Games} />
      </Switch>
    </div>
  );
}

export default App;
