import {image} from "../constants/index"


export const TopBar = () => {
    const {logo} = image
  return (
  <>
  <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Sign Up <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

</>
  )
}
