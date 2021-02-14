import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SigninSignup from './pages/Auth/SigninSignup';
import { auth } from './firebase/firebase.utils';
import './App.css';
import { Component, Fragment } from 'react';

class App extends Component {
  state = {
    currentUser: null,
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SigninSignup} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
