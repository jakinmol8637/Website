import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from './components/Resume';
//import DoublePendulumComponent from "./components/doublePendulum";

import "./App.css";

function App() {
  return (
    <div>
      <Home name="JOHN AKINMOLAYAN" tagline="Welcome to my website" />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
