import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main">
        <div className="content">Bienvenido a MixMix</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
