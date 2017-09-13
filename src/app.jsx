import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Galeria from './components/galeria';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Galeria />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));