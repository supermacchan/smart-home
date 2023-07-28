import { Hero } from "components/Hero/Hero";
import { Activities } from "components/Activities/Activities";
import { Project } from "components/Project/Project";
import { Clients } from "components/Clients/Clients";

const Home = () => {
    return(
        <main>
            <Hero />
            <Activities />
            <Project />
            <Clients />
        </main>
    )
}

export default Home;