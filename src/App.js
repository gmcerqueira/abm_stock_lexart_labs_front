import { Switch, Route } from 'react-router';
import NavBar from './components/NavBar';
import Home from './pages/index';

// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route path="/signup" component={Signup} /> */}
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
