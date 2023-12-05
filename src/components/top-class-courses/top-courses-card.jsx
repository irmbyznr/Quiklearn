import { coursesCard } from '../constants'

export const TopCoursesCard = () => {
  return (
    <div className="grid grid-cols-4 gap-20 pt-20">
       {
        coursesCard.map((course,index) =>(

                <div  key={index} className="flex flex-row items-center justify-center gap-6 border bg-card rounded-md px-21 py-10">

            <span className={` text-3xl flex items-center justify-center border-2 border-solid ${course.border} rounded-full bg-transparent h-16 w-16 text-white `}
              style={{ backgroundImage: `${course.background}`, boxShadow: "0 4px 20px #d0d0d0", transition: "all .41s ease-in-out "}}
             >{<span><course.icon/></span> }</span>
            <span>
            <p className='text-xl text-purple'>{course.title}</p>
            <p className='text-base text-grey'>{course.quantity}</p>
            </span>
           </div>
           
        ))
       }
    </div>
  )
}
