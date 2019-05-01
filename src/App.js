import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Appbar from './components/Appbar'

function App() {
  return (
    <>
      <Router>
        <div>
          <Appbar></Appbar>
          {/* <Navbar uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} userName={this.state.name} /> */}
          {/* <Route path='/Onboarding' component={() => this.state.isSignedIn ? <Onboarding /> : <Loader uiConfig={uiConfig} isSignedIn={this.state.isSignedIn} userName={this.state.name}/>}/> */}
        </div>
      </Router>
      </>
  );
}

export default App;
