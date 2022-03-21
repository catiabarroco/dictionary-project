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
          <Dictionary defaultKeyword="Hello"/>
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://github.com/catiabarroco"
              target="_blank"
              rel="noreferrer"
            >
              Cátia Barroco (Catis Coding)
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/catiabarroco/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://keen-jennings-86afd8.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
