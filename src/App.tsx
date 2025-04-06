import React from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import Button from './components/Button/Button'; // Adjust the path based on your project structure

function App() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a>
          <Button onClick={handleButtonClick}>Click Me</Button>
        </a>
      </header>
    </div>
  );
}

export default App;