import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Reg from './forms/registration'
import Login from './forms/login'
import AdminLogin from './forms/adminLogin'
import Welcome from './forms/welcome'


const App = ()=>{
  return (
    <div className="App">
    <Router>
    <Link to={'/reg'}><button className='form-control form-button'>Registration</button></Link>
    <Link to={'/login'}><button className='form-control form-button'>Login</button></Link>
    <Link to={'/admin'}><button className='form-control form-button'>Admin</button></Link>
    <Link to={'/'}><button className='form-control form-button'>WelCome</button></Link>
    <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/reg' component={Reg} />
              <Route path='/login' component={Login} />
              <Route path='/admin' component={AdminLogin} />
    </Switch>
    </Router>
    
    
    </div>
  );
};

export default App;
