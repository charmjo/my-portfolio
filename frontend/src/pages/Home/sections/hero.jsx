

function Hero () {
    return (      
    <section
      className="relative"
    >
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r "
      ></div>

      <div
        className="relative mx-auto max-w-screen-3xl lg:flex lg:h-screen lg:items-center z-10"
      >
        <div className="text-center sm:text-left lg:pl-20 mb-20 w-3/5">
          <div className="mb-5">
            <h1 className="text-5xl font-bold sm:text-8xl">
              Hi there! 
            </h1>
            <h1 className="text-5xl font-bold sm:text-8xl">
              My name is <span className="text-maroon-oak-700">Charm</span>.
            </h1>
          </div>

          <p className="mt-4 max-w-3xl sm:text-4xl/tight mb-5">
            I am a <span className="text-maroon-oak-700 sm:text-5xl/tight">software engineer</span> who likes to build <span className="text-aqua-haze-600 sm:text-5xl/tight">solutions</span> around <span className="text-aqua-haze-600 sm:text-5xl/none">data</span>.
          </p>

          <div className="mt-11 flex flex-wrap gap-12 text-center">
            <button
              href="#"
              className="block w-full rounded bg-maroon-oak-700 px-12 py-3 text-2xl font-medium text-white shadow hover:bg-maroon-oak-800 focus:outline-none focus:ring active:bg-maroon-oak-800 sm:w-auto"
            >
              Resume
            </button>

            <button
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-2xl font-medium text-maroon-oak-700 shadow hover:bg-maroon-oak-50 focus:outline-none focus:ring active:text-maroon-oak-600 sm:w-auto"
            >
              Contact Me
            </button>
          </div>
        </div>  

        <div class="max-w-3xl h-full overflow-hidden ml-auto w-2/5">
          <img src="assets/img/cherry_blossom2.png" alt="Description" class="scale-125 w-full h-full object-left-top object-cover"/>
        </div>      
      </div>
      
    </section>
  );
}

export default Hero;