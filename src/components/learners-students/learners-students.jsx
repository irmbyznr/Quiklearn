import {image,info} from "../constants/index"
import { CustomButton } from "../helpers/custom-button"

const LearnersStudents = () => {
    const {girlPhoto,underline}=image
    const {learnersStudentsTitle1,learnersStudentsTitle2,learnersStudentsDesc}=info
  return (
    <div className="bg-cream">
    <div className="mx-auto container mx-auto flex flex-col lg:flex-row items-center justify-center p-6">
     <div className="w-full">
            <img src={girlPhoto} alt="" />
        </div>
        <div className="flex flex-col gap-6">
            <p className="text-sm text-grey pt-8">{learnersStudentsTitle1}</p>
            <div>
            <h2 className="text-4xl text-purple font-semibold relative">{learnersStudentsTitle2}
            <img src={underline} alt="" className="absolute "/>
            
            </h2>
                  </div>
            <p className="text-base text-grey">{learnersStudentsDesc}</p>
            <div>
                <CustomButton title="Explore All Courses"/>

            </div>
        </div>
       
    </div>

    </div>
    )
}

export default LearnersStudents