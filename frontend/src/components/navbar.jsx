import { Link, useMatch, useResolvedPath } from "react-router-dom";

// TODO: TEST THE NAVBAR
function Navbar () {
    return (
        <nav className="text-3xl bg-gradient-to-r from-waiouru-50 via-aqua-haze-200 to-waiouru-50 flex justify-between items-stretch gap-8 px-4">
            <Link to="/" className="h-full flex items-center p-1">Site Name</Link>
            <ul className="flex gap-4">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>

                {/* hover:bg-azalea-200 TODO: this is for the Blog link:  */}


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
        <li className={`hover:bg-azalea-200 ${isActive ? "bg-azalea-200" : ""}`}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
} 

export default Navbar;