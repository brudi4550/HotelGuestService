import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar/>
          <Main/>
        </div>
      </div>
    )
  }
}

export default App;