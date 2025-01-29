import cherryBlossom from "../../../assets/img/design/cherry_blossom2.png";

function Hero () {
    return (      
    <section
      className="relative p-3 lg:p-0"
    >
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r "
      ></div>

      <div
        className="relative mx-auto max-w-screen-3xl lg:flex lg:h-screen items-center z-10"
      >
        <div className="text-center sm:text-left lg:pl-20 mb-20 sm:w-3/5">
          <div className="mb-5 text-5xl font-bold sm:text-8xl">
            <h1 className="">
              Hi there! 
            </h1>
            <h1 className="">
              My name is <span className="text-maroon-oak-700">Charm</span>.
            </h1>
          </div>

          <p className="mt-4 text-xl max-w-3xl sm:text-4xl/tight mb-5">
            I am a <span className="text-maroon-oak-700 text-2xl sm:text-5xl/tight">software engineer</span> who likes to build <span className="text-aqua-haze-600 text-2xl sm:text-5xl/tight">solutions</span> around <span className="text-aqua-haze-600 text-2xl sm:text-5xl/none">data</span>.
          </p>

          <div className="gap-4 flex flex-wrap sm:mt-11 sm:gap-12 text-center">
            <a
              href="https://drive.google.com/file/d/1gI_bdPasrLg0XJ41wP1O8ttp_sfr2wCh/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full rounded bg-maroon-oak-700 px-12 py-3 text-2xl font-medium text-white shadow hover:bg-maroon-oak-800 focus:outline-none focus:ring active:bg-maroon-oak-800 sm:w-auto"
            >
              Resume
            </a>

            <button
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-2xl font-medium text-maroon-oak-700 shadow hover:bg-maroon-oak-50 focus:outline-none focus:ring active:text-maroon-oak-600 sm:w-auto"
            >
              Contact Me
            </button>
          </div>
        </div>  

        <div class="hidden sm:block max-w-3xl h-full overflow-hidden ml-auto sm:w-2/5">
          <img src={cherryBlossom} alt="Description" class="scale-125 w-full h-full object-left-top object-cover"/>
        </div>      
      </div>
      
    </section>
  );
}

export default Hero;