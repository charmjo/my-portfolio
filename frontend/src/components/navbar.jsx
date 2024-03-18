import { Link, useMatch, useResolvedPath } from "react-router-dom";

// TODO: TEST THE NAVBAR
// TODO: Make the navbar responsive
function Navbar () {
    return (
        <nav className="text-maroon-oak-900 text-xl bg-gradient-to-r from-waiouru-50 via-aqua-haze-200 to-waiouru-50 flex justify-between items-stretch gap-8 px-20">
            <Link to="/" className="h-full font-sacramento font-medium text-4xl flex items-center p-1 mt-2">charm relator</Link>
            <ul className="flex gap-4 items-center">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>

                   {/* hover:bg-azalea-200 TODO: this is for the Blog link:  */}
                <CustomLink to="/blog">Blog</CustomLink>
            </ul>
        </nav>
    );
    
}

function CustomLink ({to, children, ...props}) {
    // allows to take a relative or absolute path and combines it with the current path
    // combines to full path
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})


    return (
        <li className={`px-2 py-1 hover:border-b-2 border-aqua-haze-700 ${isActive ? "border-b-2 text-aqua-haze-700" : ""}`}>
            <Link className="hover:text-aqua-haze-700" to={to} {...props}>
                {children}
            </Link>
        </li>
    );
} 

export default Navbar;