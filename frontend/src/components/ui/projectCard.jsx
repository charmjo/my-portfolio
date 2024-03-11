import githubLogo from '../../assets/github-mark-green.svg'

const ProjectCard = (props) => {
    return (
    <article className="flex-none w-full p-4 bg-white rounded-lg shadow-md" key={props.key}>
        <div className="contatiner h-500">
            <img className="w-full h-1/2 object-cover mb-4 rounded-lg" src={props.data.image} alt="Card" /> 
            <h3 className="text-waiouru-900 text-lg font-bold">{props.data.name}</h3>
            <p className="mb-3 text-aqua-haze-600"><small> 
                <em>Technologies Used: <span>{props.data.tags.map((tech,index)=>(
                ` ${tech},`
            ))}</span>
                </em> 
            </small></p>
            <p className="text-waiouru-950 mb-5">{props.data.description}</p>
            
            <a className="mb-3 rounded bg-aqua-haze-600 py-3 px-3 w-5/6 sm:w-5/12 grid gap-1 grid-cols-3 items-center justify-center m-auto" href={props.data.location}> 
                <img className="w-8 sm:w-10 flex justify-center col-span-1" src={githubLogo} alt="github logo" />
                <p className="font-medium col-span-2 text-aqua-haze-100 text-center sm:text-start">Go to Github Link</p> 
            </a>
        </div>

    </article>
    );
}

export default ProjectCard;