import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NavTop from "./components/NavTop/NavTop";
import Smile from "./components/Smile/Smile";

function App() {
  return (
    <>
      <NavTop />
      <Navbar />
      <Hero />
      <Smile />
    </>
  );
}

export default App;
