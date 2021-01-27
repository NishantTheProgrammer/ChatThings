
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Home from './containers/Home/Home';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={["/login", "/signup", "/logout"]} exact component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
