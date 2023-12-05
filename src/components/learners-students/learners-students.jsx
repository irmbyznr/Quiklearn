import {image,info} from "../constants/index"
import { Button } from "../helpers/button"

const LearnersStudents = () => {
    const {girlPhoto,underline}=image
    const {learnersStudentsTitle1,learnersStudentsTitle2,learnersStudentsDesc}=info
  return (
    <div className="bg-cream">
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8l">

     <div>
            <img src={girlPhoto} alt="" />
        </div>
        <div className="flex flex-col gap-6">
            <p className="text-sm text-grey">{learnersStudentsTitle1}</p>
            <div>
            <h2 className="text-4xl text-purple font-semibold">{learnersStudentsTitle2}</h2>
            <img src={underline} alt="" />
                  </div>
            <p className="text-base text-grey">{learnersStudentsDesc}</p>
            <div>
            <Button/>

            </div>
        </div>
       
    </div>

    </div>
    )
}

export default LearnersStudents