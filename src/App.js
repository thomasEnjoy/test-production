import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var x = `if (window.process && window.process.env && typeof window.process.env  === "object") {
  window.process.env = Object.assign({}, window.process.env, ${JSON.stringify(
    process.env
  )});
} else if (window.process && typeof window.process  === "object") {
  window.process.env = ${JSON.stringify(process.env)}
} else {
  window.process = {
    env: ${JSON.stringify(process.env)}
  }
}`;

console.log(x);
// var extractscript=/<script>(.+)<\/script>/gi.exec(x);
// x=x.replace(extractscript[0],"");

class App extends Component {
  componentDidMount () {
    // this runs the contents in script tag on a window/global scope
    window.eval(x);

  }
  render() {
      console.log(`env: ${process.env.NODE_ENV}`);
      console.log(`env: ${process.env.NODE_ENV} ${process.env.thomas}`);
    return (
      <div className="App">
        <div dangerouslySetInnerHTML={{__html: x}} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
