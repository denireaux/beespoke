import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import BeespokeLogo from './BeespokeLogo.JPG';

function App() {
  return (
    <div className="App">

    <Nav />

      <header className="App-header">
{/*         <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={BeespokeLogo} className="Beespoke-logo-main" alt="logo"/>
{/*         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
