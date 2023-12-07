import { informations } from "../constants/index"
import "./info-section.css"

export const InfoSection = () => {
  return (
    <div className="bg-purple info-section bg-center bg-cover py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-6 text-white">
        {informations.map((item) => (
          <div key={item.title} className="flex items-center gap-4 py-5 px-8">
            <span className={`text-4xl ${item.color}`}> {item.icon && <item.icon />}</span> 
             <span className="flex flex-col gap-2">
             <p className="text-xl">{item.title}</p>
            <p className="text-base text-lightgrey">{item.description}</p>
             </span>
           
          </div>
        ))}
        </div>
    </div>
  )
}
