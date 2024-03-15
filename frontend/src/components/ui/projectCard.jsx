import githubLogo from '../../assets/github-mark-green.svg'

function ProjectCard (props) {
    return (
    <article className=" w-full p-4 bg-white rounded-lg shadow-md" key={props.key}>
        <div className="container h-500">
            <img className="w-full h-48 object-cover mb-4 rounded-lg" src={props.data.image} alt="Card" /> 
            <h3 className="text-waiouru-900 text-lg font-bold">{props.data.name}</h3>
            <p className="mb-3 text-aqua-haze-600"><small> 
                <em>Technologies Used: <span>{props.data.tags.map((tech,index)=>(
                ` ${tech},`
            ))}</span>
                </em> 
            </small></p>
            <p className="text-waiouru-950 pb-5">{props.data.description}</p>
            
            <a className="align-bottom rounded bg-aqua-haze-600 py-3 px-3 w-5/6 md:w-2/3 xl:w-5/12 flex items-center justify-center m-auto" href={props.data.location}> 
                <img className="w-8 sm:w-10 flex justify-center" src={githubLogo} alt="github logo" />
                <p className="ml-3 font-medium text-aqua-haze-100 text-center sm:text-start">Go to Github Link</p> 
            </a>
        </div>

    </article>
    );
}

export default ProjectCard;