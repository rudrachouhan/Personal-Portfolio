import "./index.css";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import  About  from "./components/About";
import  Skills  from "./components/Skills";
import { Education }  from "./components/Education";
import Works from "./components/Works";
import { StarsCanvas } from "./components/canvas";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col">
      <div className="hero h-screen w-screen">
        <Navbar />
        <Banner />
      </div>
      <Skills />
      <About />
      <Education />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas/>
      </div>
    </div>
  );
}

export default App;
