import './index.css';
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/home" component={Home}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
