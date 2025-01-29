import Hero from "./sections/hero";
import Projects from "./sections/projects";
import SkillsDev from "./sections/skillsDev";
import SkillsDataAnalyst from "./sections/skillsDataAnalyst";


function Home() {
    return (
        <div className="p-3 md:p-0">
            <Hero />
            <SkillsDev />
            <SkillsDataAnalyst />
            <Projects />
        </div>
        
    );
}

export default Home;