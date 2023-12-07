import { info, image } from "../constants/index";
import { CustomButton } from "../helpers/custom-button";
import "./main-section.css"

const MainSection = () => {
  const { desc1, desc2 } = info;
  const { mainSection,underline } = image;
  return (
    <div className="bg-cream">
      <div className=" flex flex-col md:flex-row items-center justify-between container mx-auto pb-40">
        <div className="flex flex-col gap-6 items-start justify-center px-8">
          <p className="text-grey text-sm">{desc1}</p>
          <div>
          <h1 className="text-6xl relative text-purple font-semibold">
           Start Learning From Our Top <span className="main-section py-2 px-8 bg-no-repeat bg-bottom bg">&nbsp;</span> Experts
          <img src={underline} alt="" className="absolute "/>

          </h1>
          </div>
          
          <p className="text-grey text-s">{desc2}</p>
          <CustomButton title="Explore All Courses" />
        </div>
        <div className="w-full pt-20 md:pt-0 lg:pl-48 px-8">
          <img src={mainSection} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
