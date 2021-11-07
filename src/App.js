import { Switch, Route } from 'react-router';
import NavBar from './components/NavBar';
import { Home, Stock } from './pages';

// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route path="/signup" component={Signup} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/stock" component={Stock} />
      </Switch>
    </div>
  );
}

export default App;
