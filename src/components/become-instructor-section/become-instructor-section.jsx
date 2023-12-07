import { CustomButton } from '../helpers/custom-button';
import {info,image} from "../constants/index";
export const BecomeInstructorSection = () => {
    const {beInstractorTitle1,beInstractorTitle2,beInstractorDesc} = info
    const {beinstractor}=image
  return (
    <div className='bg-cream pt-10'>
        <div className="mx-auto container flex flex-col items-center justify-center lg:flex-row p-6">
<div className='flex flex-col items-start gap-5 mb-10 lg:pb-0'>
    <p className='text-grey text-sm'>{beInstractorTitle1}</p>
    <h2 className='text-purple text-4xl font-semibold'>{beInstractorTitle2}</h2>
    <p className='text-grey text-base'>{beInstractorDesc}</p>
    <CustomButton title="Become An Instructor"/>
</div>
<div className='w-full'>
    <img src={beinstractor} alt="" />
</div>
        </div>
    </div>
  )
}
