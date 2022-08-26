import Analytics from "./components/Analytics";
import CardContainer from "./components/CardContainer";
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
      <CardContainer />
    </>
  );
}

export default App;
