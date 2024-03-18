import construction from "../../assets/construction.svg";

function UnderConstruction (props) {
    return (
        <>
            <div className="flex-grow items-center justify-center bg-maroon-oak-100">
                {/* Construction Background from freepik */}
                <h1 className="py-5 text-center text-maroon-oak-900 font-extrabold sm:text-3xl">{props.pageTitle} Coming Soon!</h1>
                <img className="w-1/3 justify-center mx-auto py-10" src={construction}></img>
                
            </div>
        </>
    );
}

export default UnderConstruction;