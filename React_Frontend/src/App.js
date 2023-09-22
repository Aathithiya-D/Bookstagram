import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    {/* <Router>
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      </Switch>
    </Router> */}
    </div>
  );
}

export default App;
