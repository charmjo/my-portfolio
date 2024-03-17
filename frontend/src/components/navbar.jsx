import { Link, useMatch, useResolvedPath } from "react-router-dom";

// TODO: TEST THE NAVBAR
function Navbar () {
    return (
        <nav className="text-xl bg-gradient-to-r from-aqua-haze-50 via-azalea-200 to-aqua-haze-50 flex justify-between items-stretch gap-8 px-4">
            <Link to="/" className="h-full font-sacramento font-medium text-4xl flex items-center p-1 mt-2">charm relator</Link>
            <ul className="flex gap-4 items-center">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>

                   {/* hover:bg-azalea-200 TODO: this is for the Blog link:  */}
                <CustomLink to="">Blog</CustomLink>
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
        <li className={`px-2 py-1 hover:bg-aqua-haze-200 ${isActive ? "bg-aqua-haze-200" : ""}`}>
            <Link to={to} {...props}>
                {children}
            </Link>
            <hr className={`hidden hover:block ${isActive ? "block bg-azalea-900" : ""}`}/>
        </li>
    );
} 

export default Navbar;