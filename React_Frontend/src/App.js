import './index.css';
import Books from './pages/Books';
import Community from './pages/Community';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Terms from './pages/Terms';
import Login from './pages/login';
import policy from './pages/policy';
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
      <Route path="/policy" component={policy}/>
      <Route path="/faq" component={Faq}/>
      <Route path="/terms" component={Terms}/>
      <Route path="/books" component={Books}/>
      <Route path="/community" component={Community}/>
      <Route path="/profile" component={Profile}/>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
