import "./App.css";
import gemaimg from "./gemaimg.jpg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={gemaimg} className="Gema-img img-fluid" alt="gema img" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Gema Volek</small>
        </footer>
      </div>
    </div>
  );
}
