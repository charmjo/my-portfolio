import cherry_blossom from "../../../assets/cherry_blossom.png"
import my_picture from "../../../assets/my_picture.jpg"

// Source : https://tailwindcomponents.com/component/about-me
function AboutMeSection () {
    return (
        <section class=" bg-azalea-950">
            <div class="container min-w-full">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="flex p-3 justify-center items-center">
                        <img class="h-3/5 rounded-full" src={my_picture} alt="profile picture"/>
                        {/* <img class="h-auto bg-cover bg-center bg-no-repeat" src={cherry_blossom}/> */}
                    </div>
                    <div class="m-auto lg:items-center p-3">
                        {/* <div class="flex justify-center">
                            <img class="hidden h-52 rounded-full mb-4" src={cherry_blossom} />
                        </div> */}
                        {/* <div class="animate-fade-in-down mb-1 text-center text-lg text-sky-600">Charm Relator</div>
                        <div class="animate-fade-in-down mb-8 text-center text-lg text-sky-800">Software Engineer</div> */}
                        <h2 class="text-3xl text-azalea-200 font-extrabold sm:text-5xl text-center md:text-start pb-5">  About Me</h2>
                        <blockquote>
                            <p class="animate-fade-in-down text-azalea-200 mb-9 text-center md:text-start sm:text-lg">
                            I am Charm Relator. I am a Software Engineer with over a year of Web Development experience, currently studying Mobile Development. My goal is to have a good grasp of Software Development fundamentals so I can write code regardless of programming language.
                            </p>
                        </blockquote>
                        <a
                        href="#"
                        class="block w-full rounded bg-rose-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-2/3 lg:w-1/2 text-center my-3"
                        >
                            My Professional Journey
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;