import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SigninSignup from './pages/Auth/SigninSignup';
import {
  auth,
  createUserProfileDocument,
  firestore,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux//user//user.action';
import './App.css';
import { Component, Fragment } from 'react';

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onShapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SigninSignup} />
        </Switch>
      </Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
