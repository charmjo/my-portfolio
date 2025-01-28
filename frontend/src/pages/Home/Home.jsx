import Hero from "./sections/hero";
import Projects from "./sections/projects";
import SkillsDev from "./sections/skillsDev";
import SkillsDataAnalyst from "./sections/skillsDataAnalyst";


function Home() {
    return (
        <>
            <Hero />
            <SkillsDev />
            <SkillsDataAnalyst />
            <Projects />
        </>
        
    );
}

export default Home;