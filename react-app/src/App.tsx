import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from './components/Resume';
import BoidsCanvas from './components/BoidsCanvas';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="canvas-container">
                <BoidsCanvas numBoids={150} />
            </div>
            <div className='content-container'>
                <Home name="JOHN AKINMOLAYAN" tagline="Welcome to my website" />
                <Resume />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;