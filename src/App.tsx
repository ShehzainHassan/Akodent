import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NavTop from "./components/NavTop/NavTop";
import Services from "./components/Services/Services";
import Smile from "./components/Smile/Smile";
import Space from "./components/Space/Space";
import Sterlization from "./components/Sterlization/Sterlization";
import Team from "./components/Team/Team";
import { Wrapper } from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <NavTop />
      <Navbar />
      <Hero />
      <Wrapper>
        <Space />
        <Services />
        <Team />
      </Wrapper>
      <Smile />
      <Sterlization />

      <Footer />
    </>
  );
}

export default App;
