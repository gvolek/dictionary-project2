import "./App.css";
import gemaimg from "./gemaimg.jpg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <img src={gemaimg} className="Gema-img img-fluid" alt="gema img" />
    </div>
  );
}
