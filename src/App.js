import './App.css';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
