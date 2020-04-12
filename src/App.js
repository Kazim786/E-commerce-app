import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from '/Users/apple/E-Commerce/king-clothing/src/firebase/firebase.util.js';


// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>

// )
  
  class App extends React.Component {
    constructor(){
      super();

      this.state = {
        currentUser: null
      };
    }


    unsubscribeFromAuth = null; 

    componentDidMount() {

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
        // this.setState({ currentUser: user });
        createUserProfileDocument(user);
        
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

      render(){
        return (
          <div>
            <Header currentUser= {this.state.currentUser}/>
            <Switch>
            <Route exact path = '/' component={HomePage} />
            <Route exact path = '/shop' component={ShopPage} />
            <Route exact path = '/signin' component={SignInAndSignUpPage} />
            </Switch>
          </div>
        );
      }
  }




// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <HomePage />
//       </div>
//     );
//   }
// }

export default App;