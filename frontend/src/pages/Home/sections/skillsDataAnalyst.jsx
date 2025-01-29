import MsPBIBadge from "../../../assets/img/certifications/pbi-data-analyst.png";
import MsDFBadge from "../../../assets/img/certifications/azure-data-fundamentals-600x600.png";
import MsPBILogo from "../../../assets/img/tools/icons8-power-bi-2021-240.png";

function SkillsDataAnalyst () {
    return (      
    <section className="text-center flex flex-wrap items-center justify-center lg:h-screen w-full lg:px-20 my-14">
        
        <div className="md:w-1/3 flex justify-center">
            <div className="md:pl-40">
                <h2 className="text-5xl md:text-left font-bold md:text-8xl md:my-6">
                    I do
                </h2>
                <h2 className="text-aqua-haze-700 text-5xl md:text-left font-bold md:text-8xl md:my-6">
                    Data Analysis
                </h2>
            </div>
        </div>

        <div className="flex-wrap justify-between h-full md:w-2/3 md:pl-36">
            <div className="flex-1 py-3 md:p-3">
                <h2 className="text-lg text-center sm:text-3xl my-3">
                    My passion and curiosity to explore the realm of data led me to obtaining these <span className="text-aqua-haze-700"><strong>certifications:</strong></span>
                </h2>
                <div class="h-auto gap-5 flex justify-center md:gap-28 md:h-2/6 md:p-5">
                    <img src={MsPBIBadge} alt="Power BI Data Analyst" className="w-1/2 md:w-auto object-fit"/>
                    <img src={MsDFBadge} alt="Azure Data Fundamentals" className="w-1/2 md:w-auto object-fit"/>
                </div>
            </div>
            <div className="flex-1 md:p-3">
                <h2 className="text-xl pt-5 text-center sm:text-3xl md:py-3">
                    <span className="text-aqua-haze-700"><strong>Tools:</strong></span>
                </h2>
                <div className="h-auto flex justify-center md:gap-28 md:h-2/6 md:p-5">
                    <img src={MsPBILogo} alt="Power BI" className="w-1/2 md:w-auto object-fit"/>
                </div>
            </div>
        </div>


        {/* desktop view */}
        <div>
            
        </div>

        {/* mobile view, need to design another view */}

    </section>
  );
}

export default SkillsDataAnalyst;