import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} alt="logo shecodes" className="App-logo img-fluid" />
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="App-footer"><small>Coded by CatisCoding</small></footer>
      </div>
    </div>
  );
}
