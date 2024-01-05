import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Selogun from "./components/Selogun";
import ShowTime from "./components/ShowTime";

function App() {
  return (
    <div className="App">
      <Heading />
      <Selogun />
      <ShowTime />
    </div>
  );
}

export default App;
