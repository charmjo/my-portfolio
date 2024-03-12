import Navbar from "./components/navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
          {/* This section will be converted to routes later on*/}
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
