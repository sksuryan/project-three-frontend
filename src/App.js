import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Feed from './components/Feed'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Profile from './components/Profile';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: null,
      loggedIn: false
    }
  }

  updateUserState(user){
    if(user){
      const token = user['token'] 
      fetch('http://127.0.0.1:5000/profile',{
        method: 'GET',
        mode: 'cors', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': token
          }
      })
      .then(data => data.json())
      .then(data => {
        user = {...user,...data}
        this.setState({
          user: {...user},
          loggedIn: true
        })
      })
      .catch(err => console.error(err))
    } else {
      this.setState({
        user,
        loggedIn: false
      })
    }
  }

  signOut(){
    fetch('http://127.0.0.1:5000/auth/signout/',
        {
            method: "POST"
        })
        .then(data => this.updateUserState(null))
        .catch(error => console.log(error))
  }

  render(){
    return (
        <Router>
          <div className="App">
          <Nav loggedIn={this.state.loggedIn} updateUserState={(user) => this.updateUserState(user)} signOut={() => this.signOut()}/>
          <Switch>
            <Route path='/profile'>
              <Profile user={this.state.user} signOut={() => this.signOut()}/>
            </Route>
            <Route path='/' updateUserState>
              <>
              {!this.state.loggedIn?<Carousel />:<Feed user={this.state.user}/>}
              </>
            </Route>
          </Switch>
          </div>
        </Router>
    );
  } 
}

export default App;
