// TODO: write a test for the WP CALL. I'LL probably call it once App is mounted.
import Carousel from "../../../components/ui/carousel";

function Projects () {
    return (
        <section className="bg-aqua-haze-50 2xl:mx-auto py-3 px-5">
            <h2 class="text-3xl text-aqua-haze-900 font-extrabold sm:text-5xl text-center pt-5">Featured Projects</h2>
            <Carousel/>
        </section>
    );
}

export default Projects;