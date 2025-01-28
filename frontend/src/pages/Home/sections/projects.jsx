// TODO: write a test for the WP CALL. I'LL probably call it once App is mounted.
import Carousel from "../../../components/ui/carousel";

function Projects () {
    return (
        <section className="2xl:mx-auto py-3 px-5 lg:h-screen">
            <div className="text-center">
                <h2 className="text-5xl font-bold sm:text-8xl mt-24">
                    Project Highlights
                </h2>
                <p className="text-lg my-3">
                    These are the projects that I’m particularly proud of. If you like to hear how I made them, please check the blog link!
                </p>
            </div>

            <Carousel/>
        </section>
    );
}

export default Projects;