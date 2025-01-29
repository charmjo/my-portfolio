import { Link, useMatch, useResolvedPath } from "react-router-dom";

// TODO: TEST THE NAVBAR
// TODO: Make the navbar responsive
function Navbar () {
    return (
        <nav className="hidden md:flex bg-azalea-50 bg-opacity-75 sticky top-0 z-50 text-maroon-oak-900 text-3xl justify-between items-stretch gap-8 px-20">
            <Link to="/" className="font-sacramento font-medium text-7xl flex items-center p-1 mt-3">CharmRelator</Link>
            <ul className="flex gap-4 items-center py-3">
                <CustomLink to="/">Home</CustomLink>
                <div class=" bg-maroon-oak-900 h-4/5 w-[1.5px] mx-5"></div>
                <CustomLink to="/about">About</CustomLink>
                <div class=" bg-maroon-oak-900 h-4/5 w-[1.5px] mx-5"></div>
                <CustomLink to="/projects">Projects</CustomLink>
                <div class=" bg-maroon-oak-900 h-4/5 w-[1.5px] mx-5"></div>
                   {/* hover:bg-azalea-200 TODO: this is for the Blog link:  */}
                <CustomLink to="/blog">Blog</CustomLink>
            </ul>

            <a 
                href="https://drive.google.com/file/d/1gI_bdPasrLg0XJ41wP1O8ttp_sfr2wCh/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <button class="btn bg-maroon-oak-700 hover:bg-maroon-oak-300 text-white font-semi-bold m-3 py-3 px-8 rounded-xl shadow-sm">
                    Resume
                </button>
            </a>
        </nav>
    );
    
}

function CustomLink ({to, children, ...props}) {
    // allows to take a relative or absolute path and combines it with the current path
    // combines to full path
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})


    return (
        <li className={`px-2 py-1 hover:border-b-2 hover:font-semibold border-maroon-oak-900 ${isActive ? "border-b-2 font-semibold" : ""}`}>
            <Link className="" to={to} {...props}>
                {children}
            </Link>
        </li>
    );
} 

export default Navbar;