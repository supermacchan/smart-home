import { Hero } from "components/Hero/Hero";
import { Activities } from "components/Activities/Activities";
import { Projects } from "components/Projects/Projects";
import { Clients } from "components/Clients/Clients";

const Home = () => {
    return(
        <main>
            <Hero />
            <Activities />
            <Projects />
            <Clients />
        </main>
    )
}

export default Home;