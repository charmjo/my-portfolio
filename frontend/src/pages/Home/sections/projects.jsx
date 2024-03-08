// TODO: write a test for the WP CALL. I'LL probably call it once App is mounted.
import Carousel from "../../../components/ui/carousel";

function Projects () {
    return (
        <section className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
            <h2 class="text-3xl text-azalea-200 font-extrabold sm:text-5xl text-center md:text-start pb-5">  Projects</h2>
            <Carousel/>
        </section>
    );
}

export default Projects;