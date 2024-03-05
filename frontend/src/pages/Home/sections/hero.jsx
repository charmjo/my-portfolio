

function Hero () {
    return (      
    <section
      className="relative bg-hero_background bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r "
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center sm:text-left ">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Hi! I am Charm.

            <strong className="block font-extrabold text-maroon-oak-900"> I am a Software Engineer. </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            I tell my story of learning through code.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-maroon-oak-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-maroon-oak-800 focus:outline-none focus:ring active:bg-maroon-oak-800 sm:w-auto"
            >
              Resume
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-maroon-oak-700 shadow hover:text-maroon-oak-800 focus:outline-none focus:ring active:text-maroon-oak-600 sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;