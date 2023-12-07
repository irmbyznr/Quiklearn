import React from 'react'
import { CustomButton } from '../helpers/custom-button'
import {info} from "../constants/index"
import "./banner-section.css"


export const BannerSection = () => {
    const {bannerTitle1,bannerTitle2}= info
  return (
   <div className='h-full banner-section'>
     <div className=' text-center pt-36 pb-36 bg-banner opacity-80 relative'>
        <p className='text-white text-sm p-3'>{bannerTitle1}</p>
        <h2 className='text-white text-4xl font-semibold pb-10 px-8'>{bannerTitle2}</h2>
        <div className="text-center bg-opacity-100 ">

        <CustomButton title="Explore More Courses"/>

      </div>
        
    </div>

   </div>
  )
}
