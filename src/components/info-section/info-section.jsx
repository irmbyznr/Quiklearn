import { informations } from "../constants/index"

export const InfoSection = () => {
  return (
    <div className="bg-purple">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8l text-white">
        {informations.map((item) => (
          <div key={item.title} className="flex items-center gap-4 py-20">
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
