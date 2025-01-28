import MsPBIBadge from "../../../assets/img/certifications/pbi-data-analyst.png";
import MsDFBadge from "../../../assets/img/certifications/azure-data-fundamentals-600x600.png";
import MsPBILogo from "../../../assets/img/tools/icons8-power-bi-2021-240.png";

function SkillsDataAnalyst () {
    return (      
    <section className="text-center flex items-center justify-center lg:h-screen w-full px-20 my-14">
        
        <div className="w-1/3 flex justify-center">
            <div className="pl-40">
                <h2 className="text-5xl text-left font-bold sm:text-8xl my-6">
                    I do
                </h2>
                <h2 className="text-aqua-haze-700 text-5xl text-left font-bold sm:text-8xl my-6">
                    Data Analysis
                </h2>
            </div>
        </div>

        <div className="w-2/3 flex-col justify-between h-full pl-36">
            <div className="flex-1 p-3">
                <h2 className="text-5xl text-center sm:text-3xl my-3">
                    My passion and curiosity to explore the realm of data led me to obtaining these <span className="text-aqua-haze-700"><strong>certifications:</strong></span>
                </h2>
                <div class="flex justify-center gap-28 h-2/6 p-5">
                    <img src={MsPBIBadge} alt="Power BI Data Analyst" className="w-auto object-fit"/>
                    <img src={MsDFBadge} alt="Azure Data Fundamentals" className="w-auto object-fit"/>
                </div>
            </div>
            <div className="flex-1 p-3">
                <h2 className="text-5xl text-center sm:text-3xl py-3">
                    <span className="text-aqua-haze-700"><strong>Tools:</strong></span>
                </h2>
                <div className="flex justify-center h-2/6 p-5">
                    <img src={MsPBILogo} alt="Power BI" className="w-auto object-fit"/>
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