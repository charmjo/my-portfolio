import Navbar from "./components/navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";


function App() {
  let Component; // create custom component

  // render page based on component


  return (
      <div className="flex flex-col">
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;
