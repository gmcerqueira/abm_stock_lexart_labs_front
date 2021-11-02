import { Switch, Route } from 'react-router';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/signup" component={Signup} /> */}
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
