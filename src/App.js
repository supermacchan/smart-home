import { Header } from "components/Header/Header";
import { Hero } from "components/Hero/Hero";
import { Activities } from "components/Activities/Activities";
import { Project } from "components/Project/Project";
import { Clients } from "components/Clients/Clients";
import { Footer } from "components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Activities />
        <Project />
        <Clients />
      </main>
      <Footer />
    </>
  );
}

export default App;
