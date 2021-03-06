import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from '/Users/apple/E-Commerce/king-clothing/src/pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from '/Users/apple/E-Commerce/king-clothing/src/firebase/firebase.util.js';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector'

import Alert from './components/song/song.component'

class App extends React.Component {
  unsubscribeFromAuth = null;
//to prevent memory leak ^^
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
            //this.props.setCurrentUser replaced by only setCurrentUser b/c of line 22
          });
        });
      }
      //this.setState({currentUser: userAuth}) replaced by setCurrentUser(userAuth); b/c of line 22
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  //Now subscription is closed once this lifecycle methods called
  //first time auth state changes, we will log the string, 
  //then immediately unsubscribe from further changes

  render() {
    return (
      <div>
        <Alert /> 
        {/* The song */}
        <Header /> 
        {/* Now header will always show */}
        <Switch>
        {/* Switch will only render the first route that matches/includes the path. 
        Once it finds the first route that matches the path, it will not look for any other matches */}
        {/* exact property in Route component requires the URL to exactly match the path precisely for it to render.
        It takes away partial matching*/}
        {/* included Switch to have more control over the routing. 
        It allows the matching aspect of 
        exact to not interfere in the rendering of the other pages  */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          {/* ternary operator ^^ */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
//added redirect component to react router dom so signed in user cant access sign in/sign up page - line 71
// mapState is used for selecting the part of 
//the data from the store that the connected component needs

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
//dispatching actions to the store.

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);