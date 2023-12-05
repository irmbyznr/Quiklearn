import { ChevronRightIcon } from '@heroicons/react/24/outline'
import {info,image} from "../constants/index"
import { Button } from '../helpers/button'
import { InfoSection } from '../info-section/info-section'

const MainSection = () => {
    const {desc1,desc2}=info
    const {mainSection,book,underline}=image
  return (
    <div className='bg-cream'>
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8l">
       <div className='flex flex-col gap-4 items-start justify-center'>
       <p className='text-grey text-sm'>{desc1}</p>
       <img src={underline} alt="" />
        <h1 className='text-6xl flex flex-wrap text-purple font-semibold'>Start Learning From Our Top <span><img src={book} alt="" /></span> Experts</h1>
        <p className='text-grey text-s'>{desc2}</p>
<Button/>
       </div>
       <div>
        <img src={mainSection} alt="" />
       </div>
    </div>
    </div>
  )
}

export default MainSection