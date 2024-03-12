function Footer () {
    return (
        <footer className="bg-gradient-to-r from-waiouru-50 via-aqua-haze-200 to-waiouru-50">
            <div className="text-center lg:text-left max-w-screen-xl px-4 py-10 md:py-16  mx-auto sm:px-6 lg:px-8">
                <div className=" grid grid-cols-1 gap-8 lg:grid-cols-3 items-center">
                    <div className="">
                        {/* TODO: Change to home */}
                        
                        <a href="">
                            <span className="sr-only">Website Logo</span>
                            <p className="text-6xl font-sacramento"> charm relator </p>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-2 lg:col-span-2 sm:grid-cols-2 sm:justify-start">
                        <div>
                            {/* <p className="font-medium">
                                Contact
                            </p>     */}
                            {/* TODO: fix the link */}
                            <p className="font-medium mt-4">
                                Contact
                            </p>
                            <nav className="text-gray-600 mt-2">
                                <a className="hover:opacity-75" href="https://www.linkedin.com/in/charm-johannes-relator/" target="_blank" rel="noreferrer" aria-hidden="true">
                                    <span className="sr-only"> LinkedIn </span>
                                    <div className="flex justify-center sm:justify-start mx-auto">
                                        <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                        <p className="ml-2">charm-johannes-relator</p>
                                    </div>

                                </a>
                                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span className="sr-only"> GitHub </span>
                                    <div className="flex justify-center sm:justify-start mt-1">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        <p className="ml-2">charmjo</p> 
                                    </div>
                                </a>
                                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span className="sr-only"> Mail </span>
                                    <div className="flex justify-center sm:justify-start mt-1">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
                                        </svg>
                                        <p className="ml-2">test@test.com</p> 
                                    </div>

                                </a>
                                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span className="sr-only"> Location </span>
                                    <div className="flex justify-center sm:justify-start mt-1">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 14.5c0 .828-1.79 1.5-4 1.5s-4-.672-4-1.5 1.79-1.5 4-1.5 4 .672 4 1.5z"/>
                                        </svg>
                                        <p className="ml-2">Waterloo, Ontario</p> 
                                    </div>

                                </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium mt-4">
                                Pages
                            </p>
                            <nav className="mt-2 flex flex-col text-gray-600">
                                <a className="hover:opacity-75" href> Home </a>
                                <a className="hover:opacity-75 mt-1" href> About </a>
                                <a className="hover:opacity-75 mt-1" href> Projects </a>
                                <a className="hover:opacity-75 mt-1" href> Blog </a>
                            </nav>
                        </div>
                        <div>
       
                            {/* <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href> Contact </a>
                                <a className="hover:opacity-75" href> FAQs </a>
                                <a className="hover:opacity-75" href> Live Chat </a>
                            </nav> */}
                        </div>
                    </div>
                </div>
                <p className="mt-8 text-center text-xs text-gray-800">
                    © 2024 Charm Johannes Relator
                </p>
            </div>
        </footer>
    );
}

export default Footer;