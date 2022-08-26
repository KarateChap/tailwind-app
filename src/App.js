import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </>
  );
}

export default App;
