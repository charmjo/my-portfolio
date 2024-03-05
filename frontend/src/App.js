import Navbar from "./components/navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
          {/* This section will be converted to routes later on*/}
        <Home />
      </header>
    </div>
  );
}

export default App;
