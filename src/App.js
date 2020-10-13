import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Carousel from './components/Carousel';

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
      this.setState({
        user,
        loggedIn: true
      })
    } else {
      this.setState({
        user,
        loggedIn: false
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Nav loggedIn={this.state.loggedIn} updateUserState={(user) => this.updateUserState(user)}/>
        {/* <Carousel /> */}
      </div>
    );
  } 
}

export default App;
